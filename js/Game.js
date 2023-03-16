class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  
      car1 = createSprite(width / 2 - 50, height - 100);
      car1.addImage("carro1", car1_img);
      car1.scale = 0.07;
  
      car2 = createSprite(width / 2 + 100, height - 100);
      car2.addImage("carro2", car2_img);
      car2.scale = 0.07;
  
      cars = [car1, car2];
  
    
      fuels = new Group();
      powerCoins = new Group();
  
      // sprite de combustível ao jogo
      this.addSprites(fuels, 4, fuelImage, 0.02);
  
      // sprite de moeda ao jogo
      this.addSprites(powerCoins, 18, powerCoinImage, 0.09);
    }
  
    // Dentro da função 'addSprites', adicione os parâmetros 'spriteGroup', 'numberOfSprites', 'spriteImage' e 'scale'
    addSprites(???, ???, ???, ???) {
    //Coloque que o fim do loop for seja o 'numberOfSprites'
      for (var i = 0; i < ???; i++) {
        var x, y;
  //Adicione o 'random' para gerar números aleatórios
        x = ???(width / 2 + 150, width / 2 - 150);
        y = ???(-height * 4.5, height - 400);
  
        var sprite = createSprite(x, y);
        sprite.addImage("sprite", spriteImage);
  
        sprite.scale = scale;
    //Adicione o código 'add' para adicionar o sprite, dentro do 'spriteGroup'
        spriteGroup.???(sprite);
      }
    }

    handleElements() {
      form.hide();
      form.titleImg.position(40, 50);
      form.titleImg.class("gameTitleAfterEffect");
    }
  
    play() {
      this.handleElements();
  
      Player.getPlayersInfo();
  
      if (allPlayers !== undefined) {
        image(track, 0, -height * 5, width, height * 6);
  
        //índice da matriz
        var index = 0;
        for (var plr in allPlayers) {
          //adicione 1 ao índice para cada loop
          index = index + 1;
  
          //use os dados do banco de dados para exibir os carros nas direções x e y
          var x = allPlayers[plr].positionX;
          var y = height - allPlayers[plr].positionY;
  
          cars[index - 1].position.x = x;
          cars[index - 1].position.y = y;
  
          // C38  AA
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
  
            this.handleFuel(index);
            this.handlePowerCoins(index);
  
          }
        }
  
        // manipulação dos eventos do teclado
        if (keyIsDown(UP_ARROW)) {
          player.positionY += 10;
          player.update();
        }
  
        drawSprites();
      }
    }
  
    handleFuel(index) {
            /*overlap é definido o  comportamento que deve ocorrer quando há uma sobreposição entre o carro e o objeto de combustível. */
  //Adicione esse código abaixo para que ele verifique a sobreposição do carro com o combustível
  //Quando isso acontecer, o combustível(fuel) do jogador sera 185 
      cars[index - 1].overlap(fuels, function(collector, collected) {
        player.fuel = ???;
//Nesse momento adicione o código 'remove', pois ele irá remover o objeto, ou seja, o combustível
        collected.remove();
      });
    }
  
    //Abaixo você possui alguns erros, tente corrigi-los
    handlePowerCoins(index) {
      cars[index - 1].???(powerCoins, function(collector, collected) {
        player.score += 21;
        player.update();
        collected.???();
      });
    }
  }
  
