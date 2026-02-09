# 🌤️ ClimAI – Aplicativo de Clima com Open-Meteo

Este projeto é um **aplicativo simples de clima** desenvolvido com **HTML, CSS e JavaScript puro**, que consome a **API Open-Meteo** para exibir informações climáticas atuais de uma cidade informada pelo usuário.

O objetivo do projeto é praticar:
- Criação de prompts eficazes para IA
- Consumo de APIs REST
- Uso da API Open-Meteo (Geocoding + Weather Forecast)
- Boas práticas de JavaScript assíncrono (`async/await`)
- Estruturação e documentação de um projeto frontend simples

---

## Funcionalidades

- Busca de cidade pelo nome
- Conversão do nome da cidade em **latitude e longitude** (Geocoding)
- Exibição da temperatura atual
- Sensação térmica
- Velocidade e direção do vento
- Horário da última atualização
- Tratamento de erros (cidade inválida, falha de rede, erro da API)
- Interface moderna e responsiva (card com glassmorphism)

---

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES2020+)**
- **Fetch API**
- **Open-Meteo API** (sem necessidade de API Key)

---

## APIs Utilizadas

### Open-Meteo Geocoding API

Utilizada para converter o nome da cidade em coordenadas geográficas.

**Endpoint:**
``
https://geocoding-api.open-meteo.com/v1/search
``

**Parâmetros principais:**
- `name` – Nome da cidade
- `count=1` – Retorna apenas o melhor resultado
- `language=pt`
- `format=json`

---

### Open-Meteo Weather Forecast API

Utilizada para buscar os dados climáticos atuais com base em **latitude e longitude**.

**Endpoint:**
``
https://api.open-meteo.com/v1/forecast
``

**Parâmetros principais:**
- `latitude`
- `longitude`
- `current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m`
- `temperature_unit=celsius | fahrenheit`
- `wind_speed_unit=kmh`

---

## Fluxo da Aplicação

1. O usuário informa o nome da cidade.
2. A aplicação valida a entrada.
3. A API de Geocoding é chamada para obter latitude e longitude.
4. As coordenadas são usadas para chamar a API de Weather Forecast.
5. Os dados climáticos são exibidos na interface.
6. Em caso de erro, uma mensagem amigável é mostrada ao usuário.

---

## Estrutura do Projeto
```
/projeto-clima
│
├── index.html # corpo web da aplicação
├── style.css # estilização da aplicação
├── script.js # script da aplicação
└── README.md # Documentação do projeto
```

---

## Exemplo de Uso
```
getWeather("Recife", "c")
  .then(data => console.log(data))
  .catch(err => console.error(err.message));
```
## Tratamento de Erros

A aplicação trata os seguintes cenários:
- Campo de cidade vazio
- Cidade não encontrada
- Falhas na requisição HTTP
- Problemas de rede
- Respostas inesperadas da API
- Boas Práticas Aplicadas
- Uso de async/await
- Validação de entrada do usuário
- Separação clara de responsabilidades (geocoding → forecast)
- Uso de encodeURIComponent
- Código legível e comentado
- Estrutura de dados consistente (JSON)
- Possíveis Evoluções

## Autor
Projeto desenvolvido como atividade prática de aprendizado, com apoio de ferramentas de IA para refinamento de prompts, geração de código e validação de boas práticas.

## Licença
Este projeto é livre para fins educacionais e de estudo.
