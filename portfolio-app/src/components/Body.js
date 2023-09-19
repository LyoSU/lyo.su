import React from 'react';

function Body(){
    return (
        <div>
            <h1>Hi</h1>
            <div class="bg-image"></div>
        <div class="cent-ly">
            <div class="animated" style="margin: 5%; animation-delay: 1s;"><img src="images/sam.png" width="100px" /></div>
            <span class="text-main">Yuri Ly</span>
            <div class="line"></div>
            <span class="text-sub">Just, web-developer</span>
            <div class="text">My name is Yuri, I am 24 years old, and I live in Ukraine.</div>
            <div class="text">I am interested in web development.<br />I mainly develop Telegram bots using PHP and Node.js, and use MySQL and MongoDB as my databases.</div>
            <div class="text">I love computer games. To me, they are like art. That's why I prefer to observe the industry more than play. I mostly play on the Nintendo Switch.</div>
            <div>
                <a class="button btn-big" href="tg://resolve?domain=LyBlog">Blog</a>
                <a class="button btn-big" id="projects-btn" href="#projects">Projects</a>
            </div>
            <a class="button btn-alt" id="donate-btn" href="#donate" onclick="spoiler('donate')">💜 Donate</a>
            <a class="button btn-alt" id="story-btn" href="#story" onclick="spoiler('story')">Little history</a>
            <a class="button btn-alt" id="comments-btn" href="#comments" onclick="spoiler('comments')">✍️</a>
            <div class="spoiler" style="display: none;" id="story">
                <p>I started my journey in web development by creating websites on uCoz back in 2011. In 2014, I started learning PHP and creating simple mobile websites. Later on, I grew tired of it and in 2016, I began making bots for VK. After realizing that the bot platform was not suitable, I switched to Telegram in 2017.</p>
                <p>I have been following the gaming industry since childhood, but unfortunately, there weren't many opportunities to play games back then. That's why my first console was the PS4.</p>
            </div>
            <div class="spoiler" style="display: none;" id="donate">
                <p>I spend a lot of time and money on my projects. If you'd like, you can send me a small contribution using one of the methods below, and I would be very grateful <3</p>
                <div>
                    <a class="button btn-donate" href="https://send.monobank.ua/jar/2fpLioJzU8" target="_blank">Bank card (monobank)</a>

                    <div>
                        BTC: <input type="text" id="copyText" value="17QaN4wPZFaH4qtsgDdTaYwiW9s9PUcHj7" readonly /><br />
                        ETH/BUSD: <input type="text" id="copyText" value="0x34007b75775F8DAe005A407141617aA2fBa2740c" readonly /><br />
                        TON: <input type="text" id="copyText" value="EQAwN6PpFOo1LFVIh5hkVjearXvrqOvPD-nyqLjVz-fPbn_s" readonly />
                    </div>

                    {/* <!-- show div only if domain is lyo.su --> */}
                    {/* <script>
                        if (window.location.hostname == "lyo.su") {
                            document.write('<iframe src="https://widgets.freekassa.ru?type=payment-window&lang=en&theme=dark&default_amount=499&api_key=1c0d9c8f3a6d4d69cb26b7cea65b60da&shopID=640" width="300" height="450" frameborder="0"></iframe>');
                        }
                    </script> */}

                    
                </div>
                <img class="bot-img" src="images/love.png" /><br />
                <p>All the money will be spent wisely by me to support the work of bots or myself. You can indicate in the description how you would like me to spend your contribution, and I will do my best to fulfill your request.</p>
            </div>
            <div class="spoiler" style="display: none; width: 100%;" id="comments">
                <script async src="https://comments.app/js/widget.js?2" data-comments-app-website="IO0Tcehc" data-limit="5" data-color="CBAFFF" data-dislikes="1" data-outlined="1" data-dark="1"></script>
                <script async src="https://comments.app/js/widget.js?2" data-comments-app-website="n2r8h4W4" data-limit="5" data-color="CBAFFF" data-dislikes="1" data-outlined="1" data-dark="1"></script>
            </div>
            <div class="title">Contacts:</div>
            <div>
                <a class="button" href="//github.com/LyoSU" target="_blank">GitHub</a>
                <a class="button" href="tg://resolve?domain=LyoSU">Telegram</a>
            </div>
            <div>
                <a class="button btn-alt" href="mailto:yuri@lyubchak.com">yuri@lyubchak.com</a>
                {/* <!-- <a class="button btn-alt" href="tel:+">+</a> --> */}
            </div>
            <div>
                <input type="text" id="copyText" value="SW-2573-5817-3401" readonly />
            </div>
        </div>
        <div class="popup" style="display: none;" id="projects">
            <div class="projects-bot">
                <img class="bot-img" src="images/fStikBot.jpg" /><br />
                <span class="title">@fStikBot</span>
                <p>Поможет собрать твои любимые стикеры из других наборов. Просто отправь ему стикер, а он добавит его в твой пак. Есть поддержка создания нескольких наборов и переключения между ними.</p>
                <a class="button btn-bot" href="tg://resolve?domain=fStikBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/HistoryAIBot.jpg" /><br />
                <span class="title">@HistoryAIBot</span>
                <p>Бот дополняет твою историю.</p>
                <a class="button btn-bot" href="tg://resolve?domain=HistoryAIBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/LyBot.jpg" /><br />
                <span class="title">@LyBot</span>
                <p>Ищет аудио в YouTube Music и отправляет в оригинальном качестве. Работает через inline.</p>
                <a class="button btn-bot" href="tg://resolve?domain=LyBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/vkm4bot.jpg" /><br />
                <span class="title">@vkm4bot</span>
                <p>Поможет найти аудио в VK и отправить её вам. Для этого достаточно отправить её название. Есть возможность поиск со страницы, плейлиста или стены. Работает через inline.</p>
                <a class="button btn-bot" href="tg://resolve?domain=vkm4bot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/QuotLyBot.jpg" /><br />
                <span class="title">@QuotLyBot</span>
                <p>Бот помогает создать цитату из сообщения.</p>
                <a class="button btn-bot" href="tg://resolve?domain=QuotLyBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/LyAdminBot.jpg" /><br />
                <span class="title">@LyAdminBot</span>
                <p>Для администрирования групп.</p>
                <a class="button btn-bot" href="tg://resolve?domain=LyAdminBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/MiWallpaperBot.jpg" /><br />
                <span class="title">@MiWallpaperBot</span>
                <p>Обои из Mi Wallpaper Carousel.</p>
                <a class="button btn-bot" href="tg://resolve?domain=MiWallpaperBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/FindLyBot.jpg" /><br />
                <span class="title">@FindLyBot</span>
                <p>Для поиска случайного собеседника.</p>
                <a class="button btn-bot" href="tg://resolve?domain=FindLyBot">Открыть</a>
            </div> 
            <div class="projects-bot">
                <img class="bot-img" src="images/tdl_bot.jpg" /><br />
                <span class="title">@tdl_bot</span>
                <p>Умеет отправлять видео с различных популярных сайтов. Полный список можно найти в самом боте. Таbr</p>
                <span class="title">@HorneyBot</span>
                <p>Находит аниме по названию, скриншоту или гифке. Позволяет получить подробную информацию об аниме. Уведомляет о выходе новых серий, которые добавлены в список избранных. Есть возможность просмотра аниме прямо в телеграме.</p>
                <a class="button btn-bot" href="tg://resolve?domain=HorneyBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/TStocksBot.jpg" /><br />
                <span class="title">@TStocksBot</span>
                <p>Игра на фондовом рынке, где «акции» — это Telegram каналы. Покупай и продавай акции своих любимых каналов.<br /><i>Все деньги в игре виртуальные и вывод их в реальные невозможен.</i></p>
                <a class="button btn-bot" href="tg://resolve?domain=TStocksBot">Открыть</a>
            </div>
            <div class="projects-bot">
                <img class="bot-img" src="images/LyOSBot.jpg" /><br />
                <span class="title">@LyOSBot</span>
                <p>Реалистичный симулятор компьютерщика, где вы играете против других игроков. Аттакуй других людей, защищайся от их атак, загружай софт, улучшай свой компьютер, ПО и многое другое.</p>
                <a class="button btn-bot" href="tg://resolve?domain=LyOSBot">Открыть</a>
            </div>
            <div class="projects-content"><p>Весь контент ботов распространяется из открытых источников исключительно в ознакомительных целях и не предназначен для коммерческого использования.<br />По поводу авторства писать на <a href="mailto:dmca@telegram.org" class="link">dmca@telegram.org</a> или мои контакты, которые указаны на главной странице.</p></div>
        </div>
        {/* <script>
            function openSpoiler(name) {
                if (name === '#projects') {
                    popup();
                } else {
                    $( ".spoiler" ).not( name ).slideUp( 500 );
                    $( name ).slideToggle( 500 );

                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(name).offset().top
                    }, 500);
                }
            }

            if (location.hash) {
                openSpoiler(location.hash)
            }

            $(window).on('hashchange',function(){ 
                if (location.hash === '#projects') {
                    popup();
                } else {
                    openSpoiler(location.hash)
                }
            })

            function spoiler (name) {
                event.preventDefault();
                if($( `#${name}` ).is(':visible') === true) {
                    window.location.hash = ''
                } else window.location.hash = name
            }

            function popup() {
                $('#projects').slideToggle( 500, function(){
                    if($('.cent-ly').css('filter') !== 'none') {
                        location.hash = '';
                        $( ".cent-ly" ).css({'filter':''});
                    } else {
                        $( ".cent-ly" ).css({'filter':'blur(5px)'});
                    }
                });
            }

            $(document).keyup(function(e) {
                if (e.keyCode === 27) popup();
            });

            $('.popup').click(function() {
                popup();
            });
        </script> */}
        </div>
    )
}

export default Body;