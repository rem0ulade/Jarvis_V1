# Jarvis Smart-Home-Assistent (Raspberry Pi Edition)

## Überblick
Optimiert für Raspberry Pi (ARM) mit:
- Offline-Hotword-Erkennung (Porcupine) auf Pi-Performance abgestimmt
- Audio input via USB-Mikrofon oder Onboard-Soundkarte
- Deutsche Spracherkennung & TTS
- GPT-4 Kontext-Verarbeitung
- Home Assistant Steuerung
- Google Kalender Integration
- Node-RED Orchestrierung
- Optionales Web-Frontend

## Voraussetzungen
- Raspberry Pi 4 (4GB+) oder höher, Raspberry Pi OS (64-bit)
- USB-Mikrofon oder HAT (Audio Input)
- Docker & Docker Compose (arm64)
- libportaudio2, python3-pyaudio
- OpenAI API Key
- Google Service Account JSON
- Home Assistant Core (Container oder Host)
- Node-RED Container

## Installation
1. **OS & Docker vorbereiten**
   ```bash
   sudo apt update && sudo apt upgrade -y
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker ${USER}
   sudo apt install libportaudio2 python3-pyaudio -y
   curl -L "https://github.com/docker/compose/releases/download/v2.6.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```
2. **Repo klonen & .env anpassen**
   ```bash
   git clone https://github.com/deinuser/jarvis.git
   cd jarvis
   cp .env.example .env
   # .env: OPENAI_API_KEY, GOOGLE_CREDENTIALS, HA_URL, HA_TOKEN, GOOGLE_OAUTH_TOKEN
   ```
3. **Docker-Container starten**
   ```bash
   docker-compose up -d
   ```
4. **Home Assistant & Node-RED**
   - HASS: `configuration.yaml`, `automations.yaml` prüfen
   - Node-RED: `Import Flows` -> `nodered/flows.json`
5. **Wakeword-Service starten**
   ```bash
   cd homeassistant/scripts
   python3 wakeword.py
   ```
6. **Rhasspy (optional)**: Profil kopieren zu `rhasspy/profile/`
7. **Web-Frontend**: `frontend/index.html` im Browser (Pi-IP) öffnen
