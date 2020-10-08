const $emoji = document.getElementById('emoji')

const emoji = []

for (let i = 1; i <= 50; i++) {
  emoji.push(`<div class="emoji">&#127770;</div>`)
}

$emoji.innerHTML = emoji.join('')
