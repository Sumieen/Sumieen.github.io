document.addEventListener('DOMContentLoaded', function () {
    const characterSelect = document.getElementById('kameoSelect');
    const characterInfo = document.getElementById('characterInfo');
    const characterImage = document.getElementById('characterImage');
    const characterBio = document.getElementById('characterBio');
    const characterFaction = document.getElementById('characterFaction');
    const characterAge = document.getElementById('characterAge');
    const kombosLink = document.getElementById('kombosLink');

    const characters = {
        scorpion: {
            image: 'images/Scorpion_MK1_render.webp',
            bio: " Like his cherished father, Scorpion is dedicated to the Lin Kuei and its defense of Earthrealm. When his father died, Scorpion was bereft. Though he took pride in knowing that his brother, Sub-Zero, would succeed their father as the Lin Kuei's grandmaster. But Sub-Zero's unprecedented moves to cast off the Lin Kuei's traditional duties have frozen Scorpion's enthusiasm. He fears that one day he may have to battle his brother for control of the Lin Kuei's legacy.",
            faction: 'Lin Kuei',
            age: 'Unknown',
            kombosPage: 'kombos/scorpion.html'
        },
        liu_kang: {
            image: 'images/LiuKang_MK1_render.webp',
            bio: "Having won control of the Hourglass, Liu Kang restarted history. He neutralized the threats and dangers that had come before, crafting a New Era in which all beings would have the opportunity to find peace. But that peace is now threatened by an enemy that Liu Kang could never have anticipated. It will take all of his wisdom and experience to save not only Earthrealm, but all of reality.",
            faction: 'White Lotus Society',
            age: 'Immortal',
            kombosPage: 'kombos/liu_kang.html'
        },
        raiden: {
            image: 'images/Raiden_MK1_render.webp',
            bio: "In the village of Fengjian, Raiden was known for his kindness and charity. He was happy to spend his days tending to the fields, as well as to his friends and family. So when he is asked to leave Fengjian and become one of Earthrealm's champions, Raiden hesitates. But he soon realizes that to best serve his village, he must join them. As the threats to Earthrealm mount, Raiden must mature into the great warrior that Liu Kang knows he can be.",
            faction: "Earthrealm's Protector",
            age: 'Immortal',
            kombosPage: 'kombos/raiden.html'
        },
        
        sub_zero: {
            image: 'images/Sub-Zero_MK1_Render.webp',
            bio: "As the Lin Kuei's Grandmaster, Sub-Zero leads his ancient warrior clan in defense of Earthrealm from external threats. For centuries, it has been their solemn task. But Earthrealm hasn't been threatened in generations, and Sub-Zero see no point in limiting his clan to preparing for dangers that may never come. Under his leadership, the Lin Kuei will come out of the shadows and fight for its place as one of Earthrealm's great nations",
            faction: 'Lin Kuei',
            age: '32',
            kombosPage: 'kombos/subzero.html'
        },
        
        johnny_kage: {
            image: 'images/JohnnyCage_MK1_render.webp',
            bio: "Like many stars before him, Johnny became addicted to his fame. He came to measure his self-worth by his fans' adoration and their praise of him on social media. But with his star now fading, Johnny is fighting an uphill battle to remain relevant. He joins Liu Kang's Earthrealm champions hoping that it will provide his career and his fame a desperately needed boost.",
            faction: 'Earthrealm',
            age: '35',
            kombosPage: 'kombos/johnnycage.html'
        },
        frost: {
            image: 'images/FrostKAM_Skin001_Pal001.png',
            bio: "Frost is a fierce competitor known for her icy temper and cold demeanor. A former apprentice of Sub-Zero, she left the Lin Kuei to forge her own path. Ambitious and strong-willed, Frost seeks to prove herself as the superior cryomancer in Earthrealm and beyond, willing to challenge anyone standing in her way.",
            faction: 'Earthrealm',
            age: '25',
            kombosPage: 'kombos/frost.html'
        },
        
        jax: {
            image: 'images/JaxKAM_Tower.png',
            bio: "Major Jackson 'Jax' Briggs is a top-notch Special Forces commander with cybernetically-enhanced arms that give him superhuman strength. Dedicated to protecting Earthrealm from any threat, Jax combines military tactics with brute force, often leading his team into the heart of darkness to fend off invasions.",
            faction: 'Special Forces',
            age: '45',
            kombosPage: 'kombos/jax.html'
        },
        
        cyrax: {
            image: 'images/CyraxKAM_Tower.webp',
            bio: "Once a human member of the Lin Kuei, Cyrax was transformed into a cybernetic ninja that excels in long-range combat and tactical warfare. Programmed to serve the clan's objectives, his struggle to regain his human memories and conscience makes him a tragic figure in the battlefields of Earthrealm.",
            faction: 'Lin Kuei',
            age: 'Unknown',
            kombosPage: 'kombos/cyrax.html'
        },
        
        sektor: {
            image: 'images/SektorKAM_Skin001_Pal001.png',
            bio: "Sektor, the son of the Lin Kuei Grandmaster, was the first to volunteer for the clan's cyber-initiative, becoming a heartless cyborg. Loyal only to his programming, he sees emotions as a weakness and aims to transform all Lin Kuei members into cyborgs, believing this is the path to ultimate perfection.",
            faction: 'Lin Kuei',
            age: 'Unknown',
            kombosPage: 'kombos/sektor.html'
        }
        
        
    }

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
