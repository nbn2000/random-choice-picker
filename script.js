const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const taG = document.querySelectorAll('.tag')

textarea.focus()
let man = []


textarea.addEventListener('keyup', (e) => {

    creatTags(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        randomSelector()
    }

})

function creatTags(input) {
    const tags = input.split(' ').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
        man = tags

    })
}


function randomSelector() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}