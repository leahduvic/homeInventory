// const vintageInkwell = {
//     "name": "Vintage Ink Well",
//     "type": "crafts",
//     "location": "Writing desk",
//     "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
//   }
  
//   const writingDesk = {
//     "name": "Shaker Writing Desk",
//     "type": "furniture",
//     "location": "Bedroom",
//     "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
//   }

//   let crafts = []
//   let furniture = []
//   let electronics = []
  
//   crafts.push(vintageInkwell)
//   furniture.push(writingDesk)

//   let HomeInventory = {
//     "furniture": furniture,
//     "crafts": crafts,
//     "electronics": electronics
//   }
//   const homeInventoryString = JSON.stringify(HomeInventory)
//   localStorage.setItem("homeInventory", homeInventoryString)

const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryEl = document.getElementById("inventory")

for (let key in HomeInventory) {
    const currentType = HomeInventory[key]
    
    for (var i = 0; i < HomeInventory[key].length; i++) {
        // Current item in the array
        var item = HomeInventory[key][i]

        // Build a string to insert into the DOM
        inventoryEl.innerHTML += `
        <section class="${item.type}">
            <h2>${item.name}</h2>
            <div>${item.location}</div>
            <div>${item.description}</div>
        </section>
        `
    }    
}