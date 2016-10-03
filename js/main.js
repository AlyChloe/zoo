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
        var animalAge = this.info.dateOfBirth;
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

    var lion = new animal('lion', new Date(1978, 10, 3), '#f9b233');
    lion.buildMe();
    lion.toString();

    var gorilla = new animal('gorilla', new Date(1989, 3, 24), '#797978');
    gorilla.buildMe();
    gorilla.toString();

    var snake = new animal('snake', new Date(1999, 4, 14), '#00a19a');
    snake.buildMe();
    snake.toString();

    var whale = new animal('whale', new Date(2014, 1, 19), '#77aad4');
    whale.buildMe();
    whale.toString();

    try {
      if (this.info.name instanceof animal) throw this.info.name + ' is not an instanceof.';
    } catch (error) {
      console.log(error);
    } finally {
      console.log('this works!');
    }

});
