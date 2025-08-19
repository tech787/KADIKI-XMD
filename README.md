
<h1 align="center">🚀KADIKI-XMD</h1>

<p align="center">
  <img src="https://files.catbox.moe/vofmjs.jpg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https://github.com/Mulanation/KADIKI-XMD"><img src="https://img.shields.io/github/stars/Crazynotdev/KADIKI-XMD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/Mulanation/KADIKI-XMD/fork"><img src="https://img.shields.io/github/forks/Mulanation/KADIKI-XMD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029Vb6d0LyFy72HEaYrP53K"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/Mulanation"><img src="https://img.shields.io/badge/Mulanation-blueviolet?style=flat-square"></a>
</p>

**SESSION ID💫**

[![Get Session](https://img.shields.io/badge/Get%20Session-KADIKI-XMD-blueviolet?style=for-the-badge&logo=linktree)](https://kadikixmd-pair.onrender.com/)
---

🧠 Features

- 🔁 Auto Restart & Baileys Multi-Device Support  
- 🔌 Dynamic Plugin Loader  
- 🔐 Private/Group Commands  
- 🖥️ Console Interface & Live Logs  
- ☁️ Deployable on Multiple Platforms  

---

🚀 One-Click Deploy Options

⚡ Katabump
[![Deploy with Katabump](https://img.shields.io/badge/Deploy%20Now-KATABUMP-2ecc71?style=for-the-badge)](https://katabump.com)

🌐 Render

    [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Mulanation/KADIKI-XMD.git)

☁️ Koyeb

[![Koyeb](https://img.shields.io/badge/Deploy-Koyeb-00C2FF?style=for-the-badge&logo=koyeb)](https://www.koyeb.com)

🛰️ Talkdrove

[![Talkdrove](https://img.shields.io/badge/Deploy-Talkdrove-orange?style=for-the-badge)](https://host.talkdrove.com/)

🔄 GitHub Actions
Deploy automatically using `.yml` workflow inside GitHub Actions.


**GITHUB DEPLOYMENT** ⭐️

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

---

🧰 Manual Installation

```bash
git clone https://github.com/Mulanation/KADIKI-XMD
cd KADIKI-XMD
npm install
node .
```

---

🔗 Useful Links

[![Join Our CHANNEL  on WhatsApp: https://whatsapp.com/channel/0029Vb6JExAF6sn6Awx5YG1d))
---

👑 Credits

> Made with ❤️ by *KADIKI TECH*  
> Contact: `263781152078`
***> Thanks to YOUNGBOY TECH for assisting in this project***
---

*©️ 2025 – KADIKI-XMD | All Rights Reserved.*


