import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const db = getDatabase();

function retrieveExercises() {
    const exerciseList = document.getElementById('exerciseList');

    const exercisesRef = ref(db, 'exercises');

    get(exercisesRef).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const exercise = childSnapshot.val();
                const exerciseCheckbox = document.createElement('input');
                exerciseCheckbox.type = 'checkbox';
                exerciseCheckbox.value = exercise.id; 
                exerciseCheckbox.id = 'exercise_' + exercise.id; 
                exerciseCheckbox.classList.add('exercise-checkbox');
                const exerciseLabel = document.createElement('label');
                exerciseLabel.htmlFor = 'exercise_' + exercise.id;
                exerciseLabel.textContent = exercise.name; 
                const exerciseItem = document.createElement('div');
                exerciseItem.appendChild(exerciseCheckbox);
                exerciseItem.appendChild(exerciseLabel);
                exerciseList.appendChild(exerciseItem);
            });
        } else {
            console.log("No exercises found");
        }
    }).catch((error) => {
        console.error("Error retrieving exercises:", error);
    });
}
function saveWorkout() {
    const selectedExercises = [];

    const checkboxes = document.querySelectorAll('.exercise-checkbox:checked');
    checkboxes.forEach(checkbox => {
        selectedExercises.push(checkbox.value);
    });

    const selectedExercisesParam = encodeURIComponent(JSON.stringify(selectedExercises));
    window.location.href = `create_workout.html?exercises=${selectedExercisesParam}`;
}

document.getElementById('saveWorkoutButton').addEventListener('click', saveWorkout);

window.onload = retrieveExercises;