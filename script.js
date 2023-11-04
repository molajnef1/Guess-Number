'use strict';

const target_value = getRandomCryptoSecureInt(1,100);
const input_field = document.getElementById("player_input");
const submit_btn = document.getElementById("submit-btn");
const tries = document.getElementById("try");

var success_message = document.getElementById("answer");
var attempts = 0;
var success = false;

function getRandomCryptoSecureInt(min, max) {
    const buffer = new Uint32Array(1);
    window.crypto.getRandomValues(buffer);
    const randomNumber = buffer[0] / (0xffffffff + 1); // Normalize to [0, 1]
    return Math.floor(randomNumber * (max - min + 1) + min);
  }

  function reload_window()
  {
        alert("YOU LOST");
        window.location.reload();
  }

  submit_btn.addEventListener("click", function(event)
  {
    event.preventDefault();
    const player_input = parseInt(input_field.value);
    if (isNaN(player_input))
        alert("Please enter a valid number.");
    else
    {   
        attempts++;
        tries.textContent = attempts;
        if(player_input == target_value)
        {
            success_message.textContent = "WINNER: THE VALUE IS " + target_value;
            popup.style.display = "block";
            success = true;
            
        }
        else if(attempts == 10 && success == false)
        {
            reload_window();
        }
        else{
            if(player_input > target_value)
            {
                success_message.textContent = "The target value is lower";
                popup.style.display = "block";
            }
            else
            {
                success_message.textContent = "The target value is Higher";
                popup.style.display = "block";
            }
        }
    }
    
  });


  popupCloseButton.addEventListener("click", function() {
    // Close the pop-up
    popup.style.display = "none";
    input_field.value = "";
    if(success)
        window.location.reload();
  });
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    document.querySelector('.raindrop-container').appendChild(raindrop);
    
    raindrop.addEventListener('animationiteration', () => {
        document.querySelector('.raindrop-container').removeChild(raindrop);
    });
}

setInterval(createRaindrop, 100);
