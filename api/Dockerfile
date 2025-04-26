# Usa imagem oficial do Node
FROM node:22

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta que o app usa (definida via variável .env PORT=3000)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
