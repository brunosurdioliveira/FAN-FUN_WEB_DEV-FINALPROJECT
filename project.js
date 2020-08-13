// Currency object with all available currencies 
var currencies = {
    cad: 1,
    gbp: 1.75,
    usa: 1.41,
    bra: 3.88
};

// Flags object
var flags = {
    cad: 'FlagCAD.png',
    gbp: 'FlagGBP.png',
    usa: 'FlagUSA.png',
    bra: 'FlagBRA.png'
}

// Initial Current Currency - It will be used to link the previous currency to fix the rigth value according to the new currency
var currentCurrency = (document.getElementById("currencySelector").value).toLowerCase();

// Change the flag and prices with currency selected
function currencyChange() {
    var currencySelected = document.getElementById("currencySelector");
    var flagDisplay = document.getElementById("currencyFlag");

    // Change the flag source according with the currency selected (linking to the flags object)
    flagDisplay.src = "resources/images/" + flags[(currencySelected.value).toLowerCase()];

    // Change the prices according with the currency selected 
    products.forEach(function (product) {
        // currencies[currentCurrency] - link to the object property - For example currencies["cad"] - returns the value 1
        // First step is change the product.price to the original value
        product.price = product.price / currencies[currentCurrency];

        // Set the new value for the product.price according with the currencySelected
        product.price *= currencies[(currencySelected.value).toLowerCase()];
    })

    // The currency selected become the currentCurrency to fix the next change to the original value
    currentCurrency = (currencySelected.value).toLowerCase();

    // Call the function to display the store Items and Cart Items
    displayStoreItems();
    displayCartItemsArray();
    calculateCart();
}

// Array to contain the store items and Cart Items objects
var products = [];
var cartItems = [];
var reviewItem = [];

// Create the product Constructor
function Product(id, name, price, qoh, max, cat, img, desc) {
    this.id = id;             // String
    this.name = name;         // String
    this.price = price;       // Float
    this.quantity = qoh;      // Int
    this.max = max;           // Int
    this.category = cat;      // String
    this.image = img;         // String
    this.description = desc;  // String
}

// Function Initialize
function initialize() {
    // Set the current Date/Time
    var date = new Date();
    document.getElementById("dateArea").innerHTML = date.toLocaleString();
    setInterval(()=> {
        var date = new Date();
        document.getElementById("dateArea").innerHTML = date.toLocaleString();
    }, 1000)

    // Constructor calls - populate the store Items array
    products.push(new Product("PID01", "Harry Potter and the Prisoner of Azkaban", 8.99, 1000, 10, "Book", "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL.jpg", "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry."));
    products.push(new Product("PID02", "Kindle Paperwhite", 239.99, 20, 3, "Electronic", "https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_SL1000_.jpg", "The thinnest, lightest Kindle Paperwhite yet—with a flush-front design and 300 ppi glare-free display that reads like real paper even in bright sunlight. Now waterproof, so you’re free to read and relax at the beach, by the pool, or in the bath. Enjoy twice the storage with 8 GB. Or choose 32 GB to carry even more titles with you."));
    products.push(new Product("PID03", "The Silent Patient", 14.99, 200, 1, "e-Book", "https://images-na.ssl-images-amazon.com/images/I/41bsvxNUSdL._SY346_.jpg", "The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive. Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word."));
    products.push(new Product("PID04", " A Game of Thrones Boxed Set", 110.00, 100, 10, "Book", "https://d2svrcwl6l7hz1.cloudfront.net/content/B00I7VWXG8/resources/0?mime=image/*", "In King’s Landing, Lord Eddard Stark of Winterfell—the Hand of King Robert Baratheon—is surrounded by enemies. Some are openly declared, such as Ser Jaime Lannister and his sister, Queen Cersei. Others are hidden in the shadows. Still others wear the smiling mask of friends. But all are deadly, as Eddard is about to discover. Nor is the enmity between Eddard and the Lannister siblings the sole source of friction between these powerful noble families. For Tyrion Lannister, the Imp—whose stunted, twisted body houses the mind of a genius—has but lately won his freedom from Lady Catelyn Stark, Eddard’s wife, who had accused him of attempting to murder her youngest son, Brandon. Now he seeks out his father, his restless thoughts bent on revenge."));
    products.push(new Product("PID05", "Wireless Headphones", 299.90, 120, 5, "Electronic", "https://images-na.ssl-images-amazon.com/images/I/71-UPisBswL._AC_SL1500_.jpg", "powerfull"));
    products.push(new Product("PID06", "Sony Wireless Earbuds", 298.00, 10, 1, "Electronic", "https://images-na.ssl-images-amazon.com/images/I/51gHDDFqJbL._AC_SL1200_.jpg", "No description"));
    products.push(new Product("PID07", "Theodora Sofa Bed", 600.00, 73, 3, "Furniture", "https://images-na.ssl-images-amazon.com/images/I/517LxSMQGzL._AC_SL1080_.jpg", "No description"));
    products.push(new Product("PID08", "Office Desk Guest Chair", 103.99, 10, 1, "Furniture", "https://images-na.ssl-images-amazon.com/images/I/71nkhwQtc6L._AC_SL1500_.jpg", "No description"));
    products.push(new Product("PID09", "Samsung 55-inch RU8000 4K", 899.99, 100, 1, "Electronic", "https://images-na.ssl-images-amazon.com/images/I/81HcvsCHJjL._AC_SL1500_.jpg", "No description"));
    products.push(new Product("PID10", "GoPro HERO7", 350.00, 12, 2, "Electronic", "https://images-na.ssl-images-amazon.com/images/I/71LyTRGqB4L._AC_SL1500_.jpg", "No description"));
    products.push(new Product("PID11", "The Rise of Magicks", 31.99, 30, 1, "Book", "https://images-na.ssl-images-amazon.com/images/I/51IrDbAUVmL._SX327_BO1,204,203,200_.jpg", "No description"));
    products.push(new Product("PID12", "Harry Potter and the Order of the Phoenix", 1.99, 1000, 10, "e-Book", "https://images-na.ssl-images-amazon.com/images/I/51-zRYQweBL.jpg", "No description"));
    products.push(new Product("PID13", "Disney Frozen Classic Fashion Elsa", 14.99, 300, 20, "Toy", "https://images-na.ssl-images-amazon.com/images/I/81VubEnb99L._AC_SL1500_.jpg", "No description"));
    products.push(new Product("PID14", "Frozen - Olaf - Snowman", 28.89, 432, 2, "Toy", "https://images-na.ssl-images-amazon.com/images/I/81WIwSrkLAL._AC_SL1500_.jpg", "No description"));
    products.push(new Product("PID15", "UGG Womens Fluff Sandal", 348.99, 2, 1, "Fashion", "https://images-na.ssl-images-amazon.com/images/I/61GhHr79bRL._AC_SY695._SX._UX._SY._UY_.jpg", "No description"));

    // Display store items array
    displayStoreItems();

    // Display Cart items array
    // displayCartItemsArray();
}

// Connect and diplay products in the table 
function displayStoreItems() {
    var table = document.querySelector("table");
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    tbody.id = "tbody";
    table.appendChild(tbody);

    // Create table body
    createTableBody(products);
}

function createTableBody(array, tbody) {
    for (var i = 0; i < array.length; i++) {
        var tempProduct = array[i];
        var filterCategory = document.getElementById("displayFilter").value;
        var trBody = document.createElement("tr");

        // Display based on filter of Category
        if (tempProduct.category == filterCategory || filterCategory == "All") {

            // Table data
            var tdId = document.createElement("td");
            tdId.className = "stay";
            var tdName = document.createElement("td");
            tdName.className = "stay";
            var tdPrice = document.createElement("td");
            tdPrice.className = "stay";
            var tdQOH = document.createElement("td");
            tdQOH.width = "150";
            tdQOH.className = "responsive";
            var tdMax = document.createElement("td");
            tdMax.width = "116";
            tdMax.className = "responsive";
            var tdCat = document.createElement("td");
            tdCat.className = "responsive";
            var tdImg = document.createElement("td");
            tdImg.className = "responsive";

            // Object 
            tdId.textContent = tempProduct.id;
            tdName.textContent = tempProduct.name;

            if (document.getElementById("currencySelector").value == "CAD") {
                tdPrice.textContent = "$" + (tempProduct.price).toFixed(2) + " CAD";
            }
            else if (document.getElementById("currencySelector").value == "USA") {
                tdPrice.textContent = "$" + (tempProduct.price).toFixed(2) + " US";
            }
            else if (document.getElementById("currencySelector").value == "BRA") {
                tdPrice.textContent = "R$" + (tempProduct.price).toFixed(2) + " BR";
            }
            else {
                tdPrice.textContent = "$" + (tempProduct.price).toFixed(2) + " GBP";
            }

            tdPrice.width = "100";

            // tdPrice.textContent = "$" + (tempProduct.price).toFixed(2);
            tdQOH.textContent = tempProduct.quantity;
            tdMax.textContent = tempProduct.max;
            tdCat.textContent = tempProduct.category;

            // Imagem Object
            var imageElement = document.createElement("img");
            imageElement.src = tempProduct.image;
            imageElement.className = "pickOfProduct";
            tdImg.appendChild(imageElement);

            // Append the objects into trBody
            trBody.appendChild(tdId);
            trBody.appendChild(tdName);
            trBody.appendChild(tdPrice);
            trBody.appendChild(tdQOH);
            trBody.appendChild(tdMax);
            trBody.appendChild(tdCat);
            trBody.appendChild(tdImg);

            // Append the trBody into tbody
            var tbody = document.getElementById("tbody");
            tbody.appendChild(trBody);
        }
    }
}

// SELECT ITEMS
// Get the input text values for the item ID and Item Qty
var inputItemID = document.getElementById("addItemId");
var inputQty = document.getElementById("addItemQty");
var inputItemIDReview = document.getElementById("reviewId");
var itemReviewText = document.getElementById("reviewDesc");
var outputMessage = document.getElementById("addValidationMessage");
var reviewMessage = document.getElementById("reviewMsg");

// Get item with the same Id as entered in the inventory (helper)
function getItemFromInventory(value) {
    // array.find() returns the product object according with criteria (product ID is equal to the value entered in the inputItemID)
    return products.find(product => product.id == (value).toUpperCase());
}

// Get item with the same ID as entered in the Cart (helper)
function getItemFromCart(value) {
    return cartItems.find(item => item.product.id == (value).toUpperCase());
}

// Get item with the same ID as entered in the review (helper)
function getItemFromReview(value) {
    return reviewItem.find(item => item.product.id == (value).toUpperCase());
}

// Set the item quantity in the cart to 0 if it does not exist there or set the item quantity with the sum of what is inputing and the item quantity in the cart 
function getTotalCartItemQty() {
    var itemCartFound = getItemFromCart(inputItemID.value);
    // If there is an item with the same ID in the Cart Array It is necessary to know the quantity of this to valitation
    var tempCartFoundQty = 0;
    if (itemCartFound) {
        // There is an item with the same ID, so the quantity of this is equal itemCartFound.quantity
        tempCartFoundQty = itemCartFound.quantity;
    } else {
        // There is not an item with the same ID, so the inicial quantity is equal zero.
        tempCartFoundQty = 0;
    }

    // The new value entered by the user is added to the quantity final
    tempCartFoundQty += Number(inputQty.value);
    return tempCartFoundQty
}

// VALIDATION 
function validate(isRemove, isAdd) {
    // Find the item with the same ID as entered
    var itemFound = getItemFromInventory(inputItemID.value);

    // Find the item for the review
    var itemFoundReview = getItemFromInventory(inputItemIDReview.value);

    // Check the total quantity of the item in the cart 
    var tempCartFoundQty = getTotalCartItemQty();

    // Validation of the item ID Entered 
    if ((isAdd || isRemove) && !inputItemID.value) {
        return "Please enter a Valid item ID";
    }
    else if ((isAdd || isRemove) && inputItemID.value.indexOf(" ") >= 0) {
        return "Please remove any spaces from the item ID";
    }
    else if ((isAdd || isRemove) && !itemFound) {
        return "Item not found!";
    }
    // Validation of the item quantity Entered 
    else if ((isAdd || isRemove) && (Number(inputQty.value) <= 0 || !Number(inputQty.value))) {
        return "Please enter a valid quantity!";
    }
    // isRemove is a parameter used to limitate those posibilition only in the add button
    else if (!isRemove && isAdd && itemFound.quantity <= tempCartFoundQty) {
        alert("The quantity that you entered is more than the available");
    }
    else if (!isRemove && isAdd && (itemFound.max < tempCartFoundQty)) {
        alert("The quantity that you entered is more than the available per person");
    }
    // validation for the review
    else if (!isRemove && !isAdd && !inputItemIDReview.value) {
        return "Please enter a Valid item ID";
    }
    else if (!isRemove && !isAdd && inputItemIDReview.value.indexOf(" ") >= 0) {
        return "Please remove any spaces from the item ID";
    }
    else if (!isRemove && !isAdd && !itemFoundReview) {
        return "Item not found!";
    }
    else if (!isRemove && !isAdd && !itemReviewText.value) {
        return "Please add a valid review!";
    }
    // If there is no problem the function will return null
    return null
}

// DISPLAY ITEM DETAILS
function displayItemDetails() {

    var itemReviewFound = getItemFromReview(inputItemID.value);

    var itemFound = getItemFromInventory(inputItemID.value);
    var message = "";

    if (!itemReviewFound) {
        message = "\nNo Reviews yet!";
    }
    else {
        itemReviewFound.reviews.forEach(function (review) {
            message += "\n- " + review;
        })
    }


    // If the item isn’t found or nothing was provided, alert the user
    if (itemFound) {
        alert("Item Details: \nID: " + itemFound.id + "\nProduct: " + itemFound.name + "\nPrice: " + itemFound.price + "\nQty Available: " + itemFound.quantity + "\nMax per Customer: " + itemFound.max + "\nCategory: " + itemFound.category + "\nCost of Shipping: FREE" + "\n\nDescription: \n" + itemFound.description + "\n\nReviews: " + message);
    }
    else {
        outputMessage.innerHTML = "Item ID invalid! Please try again."
    }
}

// ADD ITEM TO THE CART
function addItemToCart() {
    // Find the product in the products Array with the same ID as was entered
    var itemFound = getItemFromInventory(inputItemID.value);

    // Find the item in the cart Array with the same ID as was entered
    var itemCartFound = getItemFromCart(inputItemID.value);

    // Get the quantity initial
    var tempCartFoundQty = getTotalCartItemQty();

    // Get the Output Message Area
    outputMessage.innerHTML = "";

    // validate
    var validMessage = validate(false, true);

    if (validMessage !== null) {
        outputMessage.innerHTML = validMessage;
    }
    // If the item does not existe in the cart and the quantity entered is more than the max quantity per user or more than the quantity on hand do this:
    else if (!itemCartFound && validMessage == null && (itemFound.quantity <= tempCartFoundQty || itemFound.max < tempCartFoundQty)) {
        // Push the itemFound properties and max quantity to the cartItems array
        cartItems.push({ product: itemFound, quantity: itemFound.max });
        // Remove the max quantity on the Quantity on hand when the item is added to the Cart
        itemFound.quantity -= itemFound.max;
    }
    else if (!itemCartFound) {
        // Push the itemFound properties and quantity to the cartItems array
        cartItems.push({ product: itemFound, quantity: Number(inputQty.value) });
        // Remove the quantity on the Quantity on hand when the item is added to the Cart
        itemFound.quantity -= Number(inputQty.value);
    }
    else if (tempCartFoundQty <= itemFound.max) {
        itemCartFound.quantity += Number(inputQty.value);
        // Remove the quantity on the Quantity on hand when the item is added to the Cart
        itemFound.quantity -= Number(inputQty.value);
    }
    else {
        itemFound.quantity -= (itemFound.max - itemCartFound.quantity);
        itemCartFound.quantity = itemFound.max;
        outputMessage.innerHTML = "You cannot add more than " + itemFound.max + " unit(s) of this product";
    }

    //diminui a quantidade da lista de produtos (soma no remover item do carrinho)
    displayCartItemsArray();

    // Display store items array
    displayStoreItems();

    // Display Calculation of items in the cart
    calculateCart();
}

// REMOVE ITEM FROM THE CART
function removeItemFromCart() {
    // Find the product in the products Array with the same ID as was entered
    var itemFound = getItemFromInventory(inputItemID.value);

    // Find the item in the cart Array with the same ID as was entered
    var itemCartFound = getItemFromCart(inputItemID.value);

    // Get the Output Message Area
    outputMessage.innerHTML = "";

    // Validation of the itemFound and ItemCartFound
    var validMessage = validate(true, false);
    if (validMessage !== null) {
        outputMessage.innerHTML = validMessage;
    }
    else if (!itemCartFound) {
        outputMessage.innerHTML = "Item not Found!";
    }
    else if ((Number(inputQty.value) > itemCartFound.quantity) || itemCartFound.quantity == 1 || itemCartFound.quantity == Number(inputQty.value)) {
        cartItems.splice(itemCartFound.index, 1);
        itemFound.quantity += itemCartFound.quantity;
    }
    else if (itemCartFound.quantity > 1) {
        itemCartFound.quantity -= Number(inputQty.value);

        // add the quantity on the Quantity on hand when the item is removed from the Cart
        itemFound.quantity += Number(inputQty.value);
    }

    //diminui a quantidade da lista de produtos (soma no remover item do carrinho)
    displayCartItemsArray();

    // Display store items array
    displayStoreItems();

    calculateCart();
}

// DISPLAY THE CART
// Connect and diplay products in the table 
function displayCartItemsArray() {
    var table = document.querySelector("#table2");
    var tbody = document.querySelector("#tbody2");
    tbody.innerHTML = "";
    table.appendChild(tbody);

    if (cartItems.length < 1) {
        document.getElementById("noItems").innerHTML = "No items In Cart. Add items to Cart";
    }
    else {
        // Clear OutputArea
        document.getElementById("noItems").innerHTML = "";

        // Create table body
        cartItems.forEach(function (item) {
            var trBody = document.createElement("tr");

            // Table data
            var tdId = document.createElement("td");
            var tdPrice = document.createElement("td");
            var tdQty = document.createElement("td");
            var tdSubtotal = document.createElement("td");

            // Object 
            tdId.textContent = item.product.id;

            if (document.getElementById("currencySelector").value == "CAD") {
                tdPrice.textContent = "$" + (item.product.price).toFixed(2) + " CAD";
                tdSubtotal.textContent = "$" + (item.product.price * item.quantity).toFixed(2) + " CAD";
            }
            else if (document.getElementById("currencySelector").value == "USA") {
                tdPrice.textContent = "$" + (item.product.price).toFixed(2) + " US";
                tdSubtotal.textContent = "$" + (item.product.price * item.quantity).toFixed(2) + " US";
            }
            else if (document.getElementById("currencySelector").value == "BRA") {
                tdPrice.textContent = "R$" + (item.product.price).toFixed(2) + " BR";
                tdSubtotal.textContent = "R$" + (item.product.price * item.quantity).toFixed(2) + " BR";
            }
            else {
                tdPrice.textContent = "$" + (item.product.price).toFixed(2) + " GBP";
                tdSubtotal.textContent = "$" + (item.product.price * item.quantity).toFixed(2) + " GBP";
            }

            tdQty.textContent = item.quantity;

            // Append the objects into trBody
            trBody.appendChild(tdId);
            trBody.appendChild(tdPrice);
            trBody.appendChild(tdQty);
            trBody.appendChild(tdSubtotal);

            // Append the trBody into tbody
            var tbody = document.getElementById("tbody2");
            tbody.appendChild(trBody);
        })
    }
}

// CALCULATE CART TOTALS
function calculateCart() {
    var cartPriceOutput = document.getElementById("cartCheckout");
    cartPriceOutput.innerHTML = "";
    var cartSubtotal = 0;
    var estimatedShipping = 0;

    var currencyValue = document.getElementById("currencySelector").value;

    // Output the subtotal of the cart
    cartItems.forEach(function (item) {
        cartSubtotal += (item.product.price * item.quantity);
    })
    var subtotal = cartSubtotal + estimatedShipping;
    var estimatedTax = subtotal * 0.13;
    var total = subtotal + estimatedTax;

    var prefix = "";
    
    if (currencyValue == "BRA") {
        prefix = "R";
    }

    cartPriceOutput.innerHTML = "Items Subtotal: " + prefix + "$" + cartSubtotal.toFixed(2) + " " + currencyValue + "<br>Estimated Shipping: " + prefix + "$" + estimatedShipping.toFixed(2) + " " + currencyValue + "<br><br>Subtotal: " + prefix + "$" + subtotal.toFixed(2) + " " + currencyValue + "<br>Estimated Tax: " + prefix + "$" + estimatedTax.toFixed(2) + " " + currencyValue + "<br>Order Total: " + prefix + "$" + total.toFixed(2) + " " + currencyValue;
}

// REVIEW AN ITEM
function review() {
    var itemFound = getItemFromInventory(inputItemIDReview.value);

    // Find the item in the review Array with the same ID as was entered
    var itemReviewFound = getItemFromReview(inputItemIDReview.value);
    reviewMessage.style.backgroundColor = "black";
    reviewMessage.style.color = "#ff5252";

    var validMessage = validate(false, false);

    if (validMessage !== null) {
        reviewMessage.innerHTML = validMessage;
    }
    else if (!itemReviewFound) {
        reviewItem.push({ product: itemFound, reviews: [itemReviewText.value] })
        reviewMessage.innerHTML = "Thank you for your review. It has been added to the product detail.";
        reviewMessage.style.backgroundColor = "green";
        reviewMessage.style.color = "white";
    }
    else {
        itemReviewFound.reviews.push(itemReviewText.value);
        reviewMessage.innerHTML = "Thank you for your review. It has been added to the product detail.";
        reviewMessage.style.backgroundColor = "green";
        reviewMessage.style.color = "white";
    }

    itemReviewText.value = "";
    inputItemIDReview.value = "";
}