# AeroForge — AWS Deployment Guide

## Architecture Overview
```
Internet → EC2 (t3.medium or t3.small)
              ├── Nginx (reverse proxy, port 80/443)
              └── Gunicorn (Flask app, port 5000)
                     └── /static/shapes/  (shape files)
```

---

## Step 1 — Launch EC2 Instance

1. Go to AWS Console → EC2 → Launch Instance
2. **AMI**: Ubuntu Server 22.04 LTS (Free Tier eligible)
3. **Instance type**: `t3.small` (demo) or `t3.medium` (production)
4. **Key pair**: Create or select an existing `.pem` key
5. **Security Group** — open these ports:
   - SSH: port 22 (your IP only)
   - HTTP: port 80 (anywhere)
   - HTTPS: port 443 (anywhere, optional)
6. **Storage**: 20 GB gp3

---

## Step 2 — Connect & Install Dependencies

```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>

# Update & install
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-venv nginx git

# Clone or upload your project
git clone <your-repo-url> /home/ubuntu/aeroforge
# OR use scp:
# scp -i your-key.pem -r ./aeroforge ubuntu@<IP>:/home/ubuntu/

cd /home/ubuntu/aeroforge
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## Step 3 — Set Anthropic API Key

```bash
# Add to environment (persistent)
echo 'export ANTHROPIC_API_KEY="sk-ant-your-key-here"' >> ~/.bashrc
source ~/.bashrc

# Test it runs
python3 app.py
# Should show: Running on http://0.0.0.0:5000
# Ctrl+C to stop
```

---

## Step 4 — Configure Systemd Service (auto-start)

```bash
sudo nano /etc/systemd/system/aeroforge.service
```

Paste:
```ini
[Unit]
Description=AeroForge Flask App
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/aeroforge
Environment="ANTHROPIC_API_KEY=sk-ant-your-key-here"
ExecStart=/home/ubuntu/aeroforge/venv/bin/gunicorn -w 2 -b 127.0.0.1:5000 app:app
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable aeroforge
sudo systemctl start aeroforge
sudo systemctl status aeroforge   # Should show "active (running)"
```

---

## Step 5 — Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/aeroforge
```

Paste:
```nginx
server {
    listen 80;
    server_name <EC2-PUBLIC-IP>;   # or your domain

    client_max_body_size 50M;      # Allow shape file uploads up to 50MB

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_read_timeout 120s;
    }

    location /static/ {
        alias /home/ubuntu/aeroforge/static/;
        expires 1d;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/aeroforge /etc/nginx/sites-enabled/
sudo nginx -t          # Test config — should say "ok"
sudo systemctl restart nginx
```

---

## Step 6 — Access Your App

Open browser: `http://<EC2-PUBLIC-IP>`

AeroForge should be live ✓

---

## Optional: HTTPS with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

---

## Useful Commands

```bash
# View app logs
sudo journalctl -u aeroforge -f

# Restart app after code changes
sudo systemctl restart aeroforge

# Upload shapes via SCP
scp -i your-key.pem shape.obj ubuntu@<IP>:/home/ubuntu/aeroforge/static/shapes/

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

---

## Cost Estimate (AWS)

| Component | Spec | Est. Monthly |
|-----------|------|-------------|
| EC2 t3.small | 2 vCPU, 2GB RAM | ~$15 |
| EBS Storage | 20 GB gp3 | ~$1.60 |
| Data Transfer | ~10 GB/mo | ~$0.90 |
| **Total** | | **~$17/mo** |

> Free Tier: t2.micro is free for 12 months (750 hrs/mo). Works fine for light demos.

---

## Project File Structure

```
aeroforge/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── templates/
│   └── index.html          # Full frontend (chat + 3D viewer)
└── static/
    └── shapes/             # OBJ/STL/PLY files live here
        ├── sample_wing.obj
        ├── turbine_blade.obj
        └── beam_stress.obj
```
