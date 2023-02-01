document.getElementById('bar').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('hidden');
  document.getElementById('menu').classList.toggle('block');
});

const container = document.getElementById('cards-container');

function showCards() {
  for (let i = 0; i < 9; i++) {
    container.innerHTML += `
    <div
            class="flex flex-col xs:w-[95%] md:w-[40%] lg:w-[25%] border rounded-xl bg-white hover:shadow-lg m-3"
          >
            <img
              src="https://picsum.photos/id/23${i}/500/300"
              alt="image"
              class="rounded-t-xl"
            />
            <div class="p-8">
              <p class="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus itaque vel iure sed! Praesentium, doloribus
                perferendis? Deserunt expedita incidunt sequi facere ratione sint
                consequatur delectus? Soluta, atque laudantium? Odio, rerum.
              </p>
              <div class="flex pt-4 flex justify-between items-center text-xs">
                <p class="text-gray-700">8 mins</p>
                <button class="text-gray-700 border-gray-700 border py-1 px-2 rounded">Read</button>
              </div>
            </div>
          </div>
    `;
  }
}
showCards();
