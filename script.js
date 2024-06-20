document.addEventListener('DOMContentLoaded', () => {
    const elements = [
        'triangle1', 'triangle2', 'triangle3', 'triangle4', 'triangle5', 
        'triangle6', 'triangle7', 'triangle8', 'triangle9', 'triangle10', 
        'triangle11', 'triangle12', 'triangle13', 'triangle14', 'triangle15',
        'rectangle1', 'rectangle2'
    ];

    elements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        element.classList.add('change-effect');
    });
});
