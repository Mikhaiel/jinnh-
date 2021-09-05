FROM fusuf/whatsasena:latest

RUN git clone https://github.com/realmikhaiel/Jinnh- /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/realmikhaiel/media

CMD ["node", "bot.js"]
