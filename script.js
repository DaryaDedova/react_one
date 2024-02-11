const info = function(){
    return React.createElement (
        'div', {}, [
            React.createElement('h3', {}, 'Дедова Дарья Александровна'),
            React.createElement('h4', {}, '+7 (999) 123-45-67'),
            React.createElement('h4', {}, 'Darya@js.com')
        ]
    )
}

document.querySelector('.one').onclick = () =>{
    ReactDOM.render(React.createElement(info), document.getElementById('first'))
}

const sity = function() {
    return React.createElement(
        'div', {}, [
            React.createElement('h2', {}, 'Москва'),
            React.createElement('p', {}, 'Столица России'),
            React.createElement('p', {}, 'Основание Москвы датируется 1147 годом и приписывается князю Юрию Долгорукому.'),
            React.createElement('div', {}, [
                React.createElement('img', {src: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/3849d53a71ff66abd9233d1d6ec0d1a9/'}, ),
                React.createElement('img', {src: 'https://mf.b37mrtl.ru/rbthmedia/images/2023.11/article/654a4e7af0fc471a7f2e1947.jpg'}, ),
            ]),
        ]
    )
}

document.querySelector('.two').onclick = () =>{
    ReactDOM.render(React.createElement(sity), document.getElementById('second'))
}