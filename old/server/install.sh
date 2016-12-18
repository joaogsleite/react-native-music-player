
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl

sudo add-apt-repository ppa:mc3man/trusty-media
sudo apt-get update
sudo apt-get install ffmpeg libavcodec-extra-53

sudo apt-get install git

wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install nodejs

npm install -g forever
