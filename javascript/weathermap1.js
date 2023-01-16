//Interactive weather map:
let map;
const frameCount = 10; // total intervals
const startMinutes = -300; // start time offset relative to now, where negative means past
const endMinutes = 0;
const AERIS_ID = 'BoP2ml6SjrZsTjoEIdneb';
const AERIS_KEY = 'bQGdc1g4yYk1s7Ear8sIOUKUb68Cw82TesWrQXlu';
const NUM_COLORS = '';

const layers = [
    // add more layers!
    'radar-global',
]

function getTileServer(stepNumber, layers, opacity = 0) {
    const interval = (endMinutes - startMinutes) / frameCount;
    const timeOffset = startMinutes + interval * stepNumber;
    const layerStr = layers.join(",");
    const url = `https://maps{s}.aerisapi.com/${AERIS_ID}_${AERIS_KEY}/${layerStr}/{z}/{x}/{y}/${timeOffset}min.png${NUM_COLORS}`;
    return L.tileLayer(url, {
        subdomains: '1234',
        attribution: '&copy;AerisWeather',
        opacity: opacity
    });
}

window.addEventListener('load', () => {
    map = L.map('map').setView([55.598778, 13.010495], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    const frames = [];
    for (let i = 0; i < frameCount; i += 1) {
        const opacity = (i === 0) ? 1 : 0;
        frames.push(getTileServer(i, layers, opacity).addTo(map));
    }

    const waitTime = 500;
    const stepTime = 1200;
    let currentOffset = 0;
    let previousOffset = currentOffset;
    setTimeout(() => {
        setInterval(() => {
            previousOffset = currentOffset;
            currentOffset += 1;
            if (currentOffset === frames.length - 1) {
                currentOffset = 0;
            }
            frames[previousOffset].setOpacity(0)
            frames[currentOffset].setOpacity(1)
        }, stepTime)
    }, waitTime)
});