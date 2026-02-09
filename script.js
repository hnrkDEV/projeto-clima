function weatherDescription(code) {
  const map = {
    0: "Céu limpo ☀️",
    1: "Principalmente limpo 🌤️",
    2: "Parcialmente nublado ⛅",
    3: "Nublado ☁️",
    45: "Nevoeiro 🌫️",
    61: "Chuva leve 🌧️",
    63: "Chuva moderada 🌧️",
    80: "Pancadas de chuva 🌦️",
  };
  return map[code] || "Condição desconhecida";
}

async function buscarClima() {
  const city = document.getElementById("cityInput").value;
  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const weather = document.getElementById("weather");

  loading.textContent = "";
  error.textContent = "";
  weather.style.display = "none";

  if (!city) {
    error.textContent = "Digite o nome de uma cidade.";
    return;
  }

  loading.textContent = "Buscando informações do clima...";

  try {
    const geo = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=pt`
    ).then((res) => res.json());

    if (!geo.results) {
      throw new Error("Cidade não encontrada");
    }

    const { latitude, longitude, name, country } = geo.results[0];

    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    ).then((res) => res.json());

    const w = data.current_weather;

    document.getElementById("city").textContent = `${name}, ${country}`;
    document.getElementById("temp").textContent = `${Math.round(
      w.temperature
    )}°C`;
    document.getElementById("desc").textContent = weatherDescription(
      w.weathercode
    );
    document.getElementById("feels").textContent = `${Math.round(
      w.temperature
    )}°C`;
    document.getElementById("wind").textContent = `${w.windspeed} km/h`;
    document.getElementById("direction").textContent = `${w.winddirection}°`;
    document.getElementById("time").textContent = new Date(
      w.time
    ).toLocaleTimeString("pt-BR");

    loading.textContent = "";
    weather.style.display = "block";
  } catch (e) {
    loading.textContent = "";
    error.textContent = "Não foi possível obter o clima.";
    console.error(e);
  }
}
