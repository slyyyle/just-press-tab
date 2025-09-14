# Just Press Tab - Cloudflare Tunnel Setup

## ✅ **Setup Complete!**

### **Tunnel Configuration:**
- **Tunnel ID:** `c5d0f457-506e-47aa-a0f2-10b07c2830d4`
- **Domain:** `just-press-tab.com` and `www.just-press-tab.com`
- **Local Port:** `3007`
- **Status:** ✅ **ACTIVE**

### **Files Created:**
1. `just-press-tab.yml` - Tunnel configuration
2. `just-press-tab-tunnel.service` - Systemd service file
3. `start-tunnel.sh` - Manual startup script

### **Service Status:**
- ✅ **Installed** in `/etc/systemd/system/`
- ✅ **Enabled** to start on boot
- ✅ **Running** and connected to Cloudflare

### **App Configuration:**
- ✅ **Port 3007** configured in `package.json`
- ✅ **Development server** running on port 3007
- ✅ **Build tested** and working

### **Usage:**
```bash
# Start development server
cd frontend && npm run dev

# Start production server
cd frontend && npm start

# Manual tunnel start (if needed)
./start-tunnel.sh

# Check tunnel status
sudo systemctl status just-press-tab-tunnel.service

# View tunnel logs
sudo journalctl -u just-press-tab-tunnel.service -f
```

### **Access:**
- **Local:** http://localhost:3007
- **Public:** https://just-press-tab.com (when app is running)

### **Next Steps:**
1. Ensure your domain DNS is pointing to Cloudflare
2. The tunnel will automatically route traffic when your app is running on port 3007
3. The service will restart automatically if the tunnel disconnects

---
*Setup completed on: July 15, 2025* 