document.addEventListener('DOMContentLoaded', function () {
    const characterSelect = document.getElementById('characterSelect');
    const characterInfo = document.getElementById('characterInfo');
    const characterImage = document.getElementById('characterImage');
    const characterBio = document.getElementById('characterBio');
    const characterFaction = document.getElementById('characterFaction');
    const characterAge = document.getElementById('characterAge');
    const kombosLink = document.getElementById('kombosLink');

    const characters = {
        scorpion: {
            image: 'images/scorpion.png',
            bio: 'Scorpion is a resurrected ninja...',
            faction: 'Shirai Ryu',
            age: 'Unknown',
            kombosPage: 'kombos/scorpion.html'
        },
        liu_kang: {
            image: 'images/liu_kang.png',
            bio: 'Liu Kang is the champion of Earthrealm...',
            faction: 'White Lotus',
            age: '32',
            kombosPage: 'kombos/liu_kang.html'
        },
        // Add data for Sub-Zero, Raiden, and Johnny Kage similarly
    };

    characterSelect.addEventListener('change', function() {
        const selectedCharacter = characters[this.value];
        if (selectedCharacter) {
            characterImage.src = selectedCharacter.image;
            characterBio.textContent = selectedCharacter.bio;
            characterFaction.textContent = selectedCharacter.faction;
            characterAge.textContent = selectedCharacter.age;
            kombosLink.href = selectedCharacter.kombosPage;
            characterInfo.style.display = 'flex';
        } else {
            characterInfo.style.display = 'none';
        }
    });
});
