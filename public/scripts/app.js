$(document).ready(() => {
    console.log('Hello Js & JQ!')

var $foodList;
var allfood = [];
var rootUrl = "/"


// GET ALL 
    $.ajax({
        method: 'GET',
        url: rootUrl + 'food',
        success: handleSuccess,
        error: handleError
    });

// RETRIEVE SUCCESS
    function handleSuccess(json) {
        var foods = json

        foods.forEach(food => {
            $('#food').append(`
            <div class="row">
                <div class="col s12 m6">
                    <div class="card grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${food.name}</span>
                             <p>${food.ingredients.title}${food.ingredients.origin}</p>
                        </div>
                    </div>
                </div>
            </div>`);
        });
    }

// RETRIEVE ERROR
    function handleError(e) {
        console.log('error', e);
        $('#foodTarget').text('Failed to load.');
    }

// CREATE NEW FOOD
    $('form').on('submit', function (e) {
        e.preventDefault();

        let food = {
            name: $('#name').val(),
            ingredients: $('#inngredient').val(),

        };

    
        $.ajax({
            method: 'POST',
            url: rootUrl + 'food',
            data: recommend,
            success: handleSuccess,
            error: handleError
        });

// CREATE SUCCESS
        function handleSuccess(json) {
            var food = json

            console.log(food.image);
            $('#food').append(`
            <div class="row">
                <div class="col s12 m6">
                    <div class="card grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${food.name}</span>
                             <p>${food.ingredients.title}${food.ingredients.origin}</p>
                        </div>
                    </div>
                </div>
            </div>`);

        }

// CREATE ERROR
        function handleError(e) {
            console.log('error', e);
            $('#foodTarget').text('Failed to load.');
        }
    })

// UPDATE SUCCESS 
 

   
    // UPDATE ERROR
        function handleError(e) {
            console.log('error', e);
            $('#foodTarget').text('Failed to load.');
        }

   
    // DELETE
    $('#food').on('click', '.delete-icon', function () {

        var id = $(this).attr('id');
        console.log(id);
        $.ajax({
            method: 'DELETE',
            url: `${rootUrl}food/${id}`,
            success: deleteSuccess,
            error: handleError
        });
    });

    function deleteSuccess(json) {
        window.location.reload();
        console.log(json);
    };

});