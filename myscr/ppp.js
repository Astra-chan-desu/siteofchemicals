document.addEventListener('DOMContentLoaded', function () {
    //получим все scrollbox
    const scrollingWrapper = document.querySelectorAll('.scrollingBlock');
    scrollingWrapper.forEach(scrollingBlock => {
        //активация первой ссылки сразу при создании 
         document.querySelectorAll(scrollingBlock.getAttribute('scrl') +' .index-link')[0].classList.add('active');
        scrollingBlock.addEventListener('scroll', function () {
            //кружочек который надо
            let currentIndex = -1;
            let elcount = this.children.length;
          
            //элмемент относительно видимой области
            currentIndex = ((this.scrollLeft+10) / parseFloat(getComputedStyle(this.querySelector(".item")).width));
            if (currentIndex> (elcount-1.5)) { currentIndex = elcount-1;}
            else {currentIndex = Math.floor(currentIndex)}

            if (currentIndex !== -1) {
                document.querySelectorAll(scrollingBlock.getAttribute('scrl') +' .index-link').forEach(link => link.classList.remove('active'));
                document.querySelectorAll(scrollingBlock.getAttribute('scrl') +' .index-link')[currentIndex].classList.add('active');

                }
            });
        });

    }
);

/*
  чтоб это работало необходимо чтоб блок имел класс scrollingBlock, 
  а также параметр scrl с ссылкой на id контейнера где эллипсы(ссылки которые должны активироваться при прокрутке)
    все странички в блоке должны иметь класс item

    все .item элементы имеют ссылку на эллемент контейнера из scrl родителя 
    (ссылку на элемент (элмент показателя скроллинга) который должен активироваться при прокурутке на этот .item  элмент)

    b - контейнер со страницами    (class scrollingBlock, параметр scrl="#x")
    x - контенйер с заменяющий scrollbar
    s - страница в элменте b     s[0](href = "#a[0]")
    a - активирующийся <a> при наведении на определенный s   a class index-link  изменение состояния при активации .index-link.active


*/