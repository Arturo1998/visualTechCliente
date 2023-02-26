<template>
  <div class="contenedorPrincipal">
    <ul v-for="(valor, index) in dispositivoActual" :key="index">
      <div v-if="valor.tipo == 'Sensor'">
        <li class="bg-stone-800 pb-4 rounded-md">
          <h1 class="bg-stone-600">
            {{ valor.nombre }}
            <button
              @click="mostrarInput()"
              class="bg-stone-700 p-1 mt-1 mb-1 rounded-md hover:bg-stone-800"
            >
              Editar
            </button>
            <input
              v-model="nuevoNombre"
              @keyup.enter="actualizaNombre()"
              v-if="mostrarInputNombre"
              type="text"
              class="ml-3 text-black"
            />
          </h1>
          <h1 class="mt-3">Sala: {{ valor.sala }}</h1>
          <div class="grid grid-cols-2 mt-4">
            <h1 class="pl-36">{{ valor.temperatura }}ºC</h1>

            <div>
              <form @submit.prevent="actualizaTemperatura()">
                <input v-model="valorTemperatura" type="number" class="w-6/12 text-black" />
                <button type="submit" class="rounded-md bg-stone-600 ml-3 hover:bg-stone-700">
                  Cambiar
                </button>
              </form>
            </div>
          </div>
        </li>
      </div>
      <div v-if="valor.tipo == 'Ejecutor'">
        <li class="bg-stone-800 pb-4 rounded-md">
          <h1 class="bg-stone-600">{{ valor.nombre }}</h1>
          <div class="grid grid-cols-2">
            <h1 class="mt-4">Estado: {{ valor.estado }}</h1>
            <h1 class="mt-3">Sala: {{ valor.sala }}</h1>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onDameDispositivos, actualizaDisp } from '../API/firebase'

let dispositivoActual = ref([])
const router = useRoute()
const valorTemperatura = ref('')
const nuevoNombre = ref('')
let mostrarInputNombre = ref(false)

onMounted(() => {
  consultaFiltrada(router.params.id)
})

const consultaFiltrada = (id) => {
  onDameDispositivos('DISPOSITIVOS', (docs) => {
    dispositivoActual.value = []
    docs.forEach((doc) => {
      if (doc.id == id) {
        dispositivoActual.value.push({ id: doc.id, ...doc.data() })
      }
    })
  })
}

function actualizaTemperatura() {
  actualizaDisp('DISPOSITIVOS', router.params.id, { temperatura: valorTemperatura.value })
  valorTemperatura.value = ''
}

function actualizaNombre() {
  actualizaDisp('DISPOSITIVOS', router.params.id, { nombre: nuevoNombre.value })
  nuevoNombre.value = ''
  mostrarInput()
}

function mostrarInput() {
  mostrarInputNombre.value = !mostrarInputNombre.value
  console.log(mostrarInputNombre.value)
}
</script>

<style scoped>
.contenedorPrincipal {
  text-align: center;
  color: white;
  width: 90%;
  margin: 0 auto;
  margin-top: 1em;
}
</style>
