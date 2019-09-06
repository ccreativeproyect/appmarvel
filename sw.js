;


//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_page_appMarvel',
  urlsToCache = [
    './',
    './css/style.css',
    './js/script.js',
    './js/main.js',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=captain%20marvel&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thanos&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=black%20panther&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider-man&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hulk&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=captain%20america&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=black%20widow&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=hawkeye&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thor&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=aegis&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=ant-man&limit=1&apikey=666d359706b3037e653e838e0e52e226&hash=d8c654b1434acc7a69ba9127b61eb186',
    './img/marvel-logo.png'
  ]

  self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            return cache.addAll(urlsToCache)
              .then(() => self.skipWaiting())
          })
          .catch(err => console.log('Falló registro de cache', err))
      )
  })

  self.addEventListener('activate',e=>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
          .then(cacheNames => {
            return Promise.all(
              cacheNames.map(cacheName => {
                //Eliminamos lo que ya no se necesita en cache
                if (cacheWhitelist.indexOf(cacheName) === -1) {
                  return caches.delete(cacheName)
                }
              })
            )
          })
          // Le indica al SW activar el cache actual
          .then(() => self.clients.claim())
      )

})


  self.addEventListener('fetch',e=>{

     //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
       console.log(res);
	console.log(e.request);
        if (res) {
          //recuperar del cache
console.log(res);
          return res
        }
	console.log(res);
	console.log(e.request);
        //recuperar de la petición a la url
        return fetch(res.url)
      })
  )

})