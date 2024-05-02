document.addEventListener('DOMContentLoaded', function() {
    const combos = {
        scorpion: [
            { combo: '1, 2, 3', damage: '30%', requirements: 'Corner only', notes: 'Basic starter combo' },
            { combo: '2, 2, Down + 4', damage: '25%', requirements: 'none', notes: 'Quick low finish' },
            { combo: '2,1 BF1 3,3 DB2', damage:'21%', requirments: 'none', notes: 'quick combo'}
        ],
        liu_kang: [
            { combo: '3, 3, Forward + 5', damage: '40%', requirements: 'Corner only', notes: 'Advanced combo' },
            { combo: 'B+2, 3, 4, BF3', damage: '23%', requirements: 'none', notes: 'EASY'},
            { combo: 'B+2, 3, U+F+1, 3, 4, BF1', damage: '30%', requirements: 'none',  notes: 'EASY'}
              
        ],
       sub_zero:[
        {combo: 'B+2, B+2, U+F+1, 3, 4',    damage: '27%',  requirements: 'none', notes: 'EASY' },
          {combo: 'B+2, B+2, F+1, 2, BF3', damage: '28%', requirements: 'none',notes: 'EASY'},
          {combo: '(Air) DB4, (Air) DB4, 4, SS+EX', damage: '44%',  requirements: 'Diving Glacier must hit bottom of opponent\'s hurtbox.', notes:' Fatal Blow' }
          
       ],
       raiden:[
        { combo: '3, 4, U+F+2, 1, 2, BF3', damage: '27%', requirements: 'none', notes: 'EASY' },
        { combo: '3, 4, F+3, 4, F+2, 2, DF2', damage: '32%', requirements: 'none', notes: 'MEDIUM' },
        { combo: '3, 4, FF, 3, 4, U+F+2, 1, 2, BF3', damage: '33%', requirements: 'none', notes: 'MEDIUM' }

       ],

       johnny_cage: [
        { combo: 'F+1, 2, 4, BF4', damage: '17%', requirements: 'none', notes: 'EASY' },
        { combo: '2, 1, 2, U+F+2, 4, 4, BF4', damage: '26%%',requirements: 'none', notes: 'EASY' },
        { combo: '2, 1, 2, FF, 2, 1, 2, 4, BF4', damage: '30%', requirements: 'none', notes: 'EASY' }
        
       ]
    };

    const characterDropdown = document.getElementById('characterDropdown');
    const comboTableBody = document.querySelector('.combo-table tbody');

    characterDropdown.addEventListener('change', function() {
        const selectedCombos = combos[this.value];
        comboTableBody.innerHTML = ''; // Clear combos

        selectedCombos.forEach(function(combo) {
            const row = `<tr>
                <td>${combo.combo}</td>
                <td>${combo.damage}</td>
                <td>${combo.requirements}</td>
                <td>${combo.notes}</td>
            </tr>`;
            comboTableBody.innerHTML += row;
        });
    });
});
