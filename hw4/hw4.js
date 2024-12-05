document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.getElementById("submit");
    const sortBtn = document.getElementById("sort");
    const sortMenu = document.getElementById("sort-menu");
    const itemsContainer = document.getElementById("items-container");


    let items = [

        { title: "Cristiano Ronaldo", description: "Footballer in Portugal", details: "Footballist in Portugal", date: "2022/02/05" },

        { title: "Ali Daei", description: "Footballer in Iran", details: "Footballist in Iran", date: "2022/02/07" }

    ];


    function displayItems() {

        itemsContainer.innerHTML = "";

        items.forEach(item => {

            const itemDiv = document.createElement("div");

            itemDiv.classList.add("item");

            itemDiv.innerHTML = `

                <div class="title">${item.title}</div>

                <div class="details">${item.details}</div>

                <div class="date">${item.date}</div>

                <div class="actions">

                    <i class="fas fa-eye" onclick="viewItem('${item.title}')"></i>

                    <i class="fas fa-trash-alt" onclick="deleteItem('${item.title}')"></i>

                </div>

            `;

            itemsContainer.appendChild(itemDiv);

        });

    }


    submitBtn.addEventListener("click", function () {

        const title = document.getElementById("title").value;

        const description = document.getElementById("description").value;

        const details = document.getElementById("details").value;


        if (title && description && details) {

            const newItem = {

                title,

                description,

                details,

                date: new Date().toISOString().slice(0, 10)

            };

            items.push(newItem);

            displayItems();

        }

    });

    sortBtn.addEventListener("click", function () {

        sortMenu.classList.toggle("hidden");

    });

    document.getElementById("oldest").addEventListener("click", function () {

        items.sort((a, b) => new Date(a.date) - new Date(b.date));

        displayItems();

    });

    document.getElementById("newest").addEventListener("click", function () {

        items.sort((a, b) => new Date(b.date) - new Date(a.date));

        displayItems();

    });

    document.getElementById("az").addEventListener("click", function () {

        items.sort((a, b) => a.title.localeCompare(b.title));

        displayItems();

    });

    window.deleteItem = function (title) {

        items = items.filter(item => item.title !== title);

        displayItems();

    };

    window.viewItem = function (title) {

        alert("Viewing item: " + title);

    };
    displayItems();

});