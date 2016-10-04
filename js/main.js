$(document).ready(function() {

    animal.prototype = {
      buildMe: function() {
        $('.container').append('<section class="' + this.info.name + 'Container"></section>');
        $('.' + this.info.name + 'Container').append('<div class="' + this.info.name + '" style="border: ' + this.info.color + ' solid 7px;"></div>');
        $('.' + this.info.name).append('<h1>' + this.info.name.toUpperCase() + '</h1>');
        $('.' + this.info.name).append('<img src=" images/' + this.image() + '" />');
        $('.' + this.info.name).append('<p class="age">' + this.age() + '</p>');
        $('.' + this.info.name).append('<p class="birth">' + this.birth() + '</p>');
        $('.' + this.info.name).append('<p class="animalSound">' + this.animalSound() + '</p>');
      },
      age: function() {
        var currentDate = new Date();
        var animalAge = new Date(this.info.dateOfBirth);
        var ageDiff = currentDate - animalAge;
        return Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25)) + ' years';
      },
      birth: function() {
        var animal = this.info.name;

        if ('lion' === animal || 'gorilla' === animal || 'whale' === animal) {
          return 'Mammal: gives birth';
        } else if ('snake' === animal ) {
          return 'Reptile: lays eggs';
        } else {
          return "I'm sorry which aniaml?";
        }
      },
      animalSound: function() {
        switch (this.info.name) {
          case 'lion':
            return 'Lions can roar.';
            break;
          case 'gorilla':
            return 'Gorillas YELL!';
            break;
          case 'whale':
            return 'Whales speak whale.';
            break;
          case 'snake':
            return 'Ew. snakes are gross.';
            break;
          default:
            return "I'm sorry, which animal?";
        }
      },
      image: function() {
        switch (this.info.name) {
          case 'lion':
            return 'lion.svg';
            break;
          case 'gorilla':
            return 'gorilla.svg';
            break;
          case 'whale':
            return 'whale.svg';
            break;
          case 'snake':
            return 'snake.svg';
            break;
          default:
            return "I'm sorry, which animal?";
        }
      }
    };

    function animal(name, dateOfBirth, color) {
      this.info = {
        name: name,
        dateOfBirth: dateOfBirth,
        color: color
      }
    }

    animal.prototype.toString = function() {
      console.log('This is toString for ' + this.info.name);
    }

    var promise = $.get('data/animals.json');

    promise.then(function(lion) {
      var Lion = new animal(lion.animals[0].name, lion.animals[0].dateOfBirth, lion.animals[0].color);
      Lion.buildMe();
      Lion.toString();
      giveBirth('lion', lion.animals[0].color);
      return promise;
    }).then(function(gorilla) {
      var Gorilla = new animal(gorilla.animals[1].name, gorilla.animals[1].dateOfBirth, gorilla.animals[1].color);
      Gorilla.buildMe();
      Gorilla.toString();
      giveBirth('gorilla', gorilla.animals[1].color);
      return promise;
    }).then(function(snake) {
      var Snake = new animal(snake.animals[2].name, snake.animals[2].dateOfBirth, snake.animals[2].color);
      Snake.buildMe();
      Snake.toString();
      giveBirth('snake', snake.animals[2].color);
      return promise;
    }).then(function(whale) {
      var Whale = new animal(whale.animals[3].name, whale.animals[3].dateOfBirth, whale.animals[3].color);
      Whale.buildMe();
      Whale.toString();
      giveBirth('whale', whale.animals[3].color);
    }).catch(function(error) {
      console.log(error);
    });

    function giveBirth(animal, color) {
      $(document).on('click', '.' + animal, function() {
        console.log('in');
        $('.' + animal).css('background', color);
        $('.' + animal + ' .age').css('visibility', 'hidden');
        $('.' + animal + ' .animalSound').css('visibility', 'hidden');
        $('.' + animal + ' .birth').text('YAY! Your ' + animal + ' gave birth!');
        $('.' + animal + ' .birth').css('fontWeight', 'bold');
        $('.' + animal + ' .birth').css('textAlign', 'center');
      });
    }
});
