var direction = prompt('You are in a dark dungeon Do you turn left or right?')
 if (direction === 'left'){
  alert('Oh sweet Jesus, there are zombies everywhere. You die!');
 }
 else if(direction === 'right'){
  alert('You see a door to your right and a long hallway');
  var hallway = prompt('Do you want to open the door or continue down the hallway?');
    if(hallway === 'open'){
      alert('A room full of zombies! You die!');
    }
    else if(hallway === 'continue'){
      alert('You continue down the hallway and see another door at the end.');

      var door = prompt('Do you open the door?');
        if(door === 'yes'){
          alert("You found the treasure room! Congratulations! You get an apple pie!");
        }
        else if(door === 'no'){
          alert('Poor choice. Here come the zombies. You die!');
        }

        else{
          alert('Why do you continually bring shame to you and your family.');
        }
    }

    else{
      alert('You are a disgrace to your family!');
    }

 }
 else{
  alert('You coward!');
 }
