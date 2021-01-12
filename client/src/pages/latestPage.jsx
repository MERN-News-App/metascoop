import React, { useState, useEffect } from "react";
import MenuBar from '../components/menuBar.jsx'
import Title from '../components/title.jsx' 
import ContentCard from '../components/contentCard.jsx'
import axios from 'axios'

const dummy = 
{
    "status": "ok",
    "news": [
        {
            "id": "675ff6f5-d6f1-484d-b2c1-027a42531bb5",
            "title": "Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls",
            "description": "Wesley Matthews' four three-pointers, Montrezl Harrell's relentless force and LeBron James' usual excellence helped the Lakers win 117-115 over Chicago....",
            "url": "https://www.latimes.com/sports/lakers/story/2021-01-08/lakers-hold-off-late-bulls-rally-for-the-win",
            "author": "@DanWoikeSports",
            "image": "https://ca-times.brightspotcdn.com/dims4/default/4506919/2147483647/strip/true/crop/4226x2377+0+220/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F98%2Fc5%2F2c7158b54a778ee3e9119cfe4517%2Fbulls-lakers-basketball-82900.jpg",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-09 05:38:54 +0000"
        },
        {
            "id": "10b581e7-f753-4472-b047-d0db72c649c7",
            "title": "Capitol riot: Media mirrors Biden by vilifying police, comparing response to Black Lives Matter protests",
            "description": "As America attempts to recover from the Capitol riot, everyone from President-elect Joe Biden and NBA star LeBron James to members of the mainstream media such as Joy Behar and Joy Reid have vilified police officers for their role in the tragic event.",
            "url": "https://www.foxnews.com/media/capitol-riot-media-athletes-echo-biden-by-vilifying-police",
            "author": "Fox News",
            "image": "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/6d2e324c-20b7-4074-9116-7e3e04976045/9c068f94-827e-4577-a06e-e7d4547cf61d/1280x720/match/1024/512/image.jpg?ve=1&tl=1",
            "language": "en",
            "category": [
                "general"
            ],
            "published": "2021-01-08 22:13:37 +0000"
        },
        {
            "id": "fe2a5c85-e091-412e-a3ce-2328a92cff9c",
            "title": "LeBron James Calls Capitol Riot 'Another Gut Punch' To Black People",
            "description": "LeBron James says the pro-Trump mob attack on D.C. is another prime example of Black people being treated differently in the U.S. ... claiming the handling of the incident proves \"we live in 2 different Americas.\"",
            "url": "https://www.tmz.com/2021/01/08/lebron-james-us-capitol-riot-another-gut-punch-black-people/",
            "author": "TMZ Staff",
            "image": "https://imagez.tmz.com/image/6d/16by9/2021/01/08/6dbccd623ddc43079243579b91be6442_xl.jpg",
            "language": "de",
            "category": [
                "celebrity",
                "entertainment"
            ],
            "published": "2021-01-08 20:02:22 +0000"
        },
        {
            "id": "3cb48af2-22f1-465c-86c3-8f6815623ad0",
            "title": "LeBron James Says 'We Live In Two Americas' As Gregg Popovich Calls For Trump's Removal",
            "description": "\"If those had been Black and Brown people storming the Capitol, we may have seen the largest massacre in U.S. history.\"...",
            "url": "https://www.forbes.com/sites/tommybeer/2021/01/08/lebron-james-says-we-live-in-two-americas-as-gregg-popovich-calls-for-trumps-removal/",
            "author": "Tommy Beer",
            "image": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ff89a13f289c828b86743ba%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D4928%26cropY1%3D0%26cropY2%3D2773",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 17:46:53 +0000"
        },
        {
            "id": "6af359fe-175c-49ea-894e-ef68a927d67f",
            "title": "Kansas City Chiefs Megastar Patrick Mahomes Launches His Own Line Of Oakley Eyewear",
            "description": "Like Nike does with its shoes for LeBron James, Oakley designed a sunglass line for Patrick Mahomes....",
            "url": "https://www.forbes.com/sites/jefffedotin/2021/01/08/kansas-city-chiefs-megastar-patrick-mahomes-launches-his-own-line-of-oakley-eyewear/",
            "author": "Jeff Fedotin",
            "image": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ff68149582080dbb898e2b9%2F0x0.jpg",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 17:01:08 +0000"
        },
        {
            "id": "1ab416d2-61c1-4d59-8d82-430cb3bd2925",
            "title": "Opinion: Why LeBron James, Gregg Popovich are best NBA duo to address social justice issues",
            "description": "Their words carry significance because of their stature in the league. LeBron James and Gregg Popovich also complement each other.",
            "url": "https://www.usatoday.com/story/sports/nba/columnist/mark-medina/2021/01/08/lebron-james-gregg-popovich-pushing-nba-discussion-race-justice/6592623002/",
            "author": "Mark Medina",
            "image": "https://www.gannett-cdn.com/media/2020/12/31/USATODAY/usatsports/8b3cd047747b4ff2afd3644dd5aa432a.jpg?crop=3687,2074,x0,y192&width=1600&height=800&fit=bounds",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 16:08:39 +0000"
        },
        {
            "id": "e408e095-1fee-4e1c-9be2-cc086d0bd4e3",
            "title": "LeBron James: Capitol Riots Show 'We Live In Two Americas'",
            "description": "LOS ANGELES (CBSLA) — NBA players and coaches from around the country have spent the last two days discussing the violence and chaos that broke out Wednesday when a mob of President Trump's supporters stormed the U.S. Capitol building. For Lakers star LeBron James, the moment was illustrative of the...",
            "url": "https://sanfrancisco.cbslocal.com/2021/01/08/lebron-james-capitol-riots-president-trump-two-americas/",
            "author": "CBS San Francisco",
            "image": "https://sanfrancisco.cbslocal.com/wp-content/uploads/sites/15116056/2021/01/James.jpg?w=1500",
            "language": "de",
            "category": [
                "regional",
                "san-francisco",
                "california"
            ],
            "published": "2021-01-08 15:15:27 +0000"
        },
        {
            "id": "90baf0d5-753b-4d2a-bcca-ef78bd50a50a",
            "title": "LeBron James: Capitol Riots Show 'We Live In Two Americas'",
            "description": "LOS ANGELES (CBSLA) — NBA players and coaches from around the country have spent the last two days discussing the violence and chaos that broke out Wednesday when a mob of President Trump's supporters stormed the U.S. Capitol building. For Lakers star LeBron James, the moment was illustrative of the...",
            "url": "https://chicago.cbslocal.com/2021/01/08/lebron-james-capitol-riots-president-trump-two-americas/",
            "author": "CBS Chicago",
            "image": "https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2021/01/James.jpg?w=1500",
            "language": "de",
            "category": [
                "regional",
                "chicago"
            ],
            "published": "2021-01-08 15:15:27 +0000"
        },
        {
            "id": "d1ccf14d-e92b-4886-90a1-d3b8b8b3f468",
            "title": "LeBron James: Capitol Riots Show 'We Live In Two Americas'",
            "description": "LOS ANGELES (CBSLA) — NBA players and coaches from around the country have spent the last two days discussing the violence and chaos that broke out Wednesday when a mob of President Trump's supporters stormed the U.S. Capitol building. For Lakers star LeBron James, the moment was illustrative of the...",
            "url": "https://dfw.cbslocal.com/2021/01/08/lebron-james-capitol-riots-president-trump-two-americas/",
            "author": "CBS Dallas/Fort Worth",
            "image": "https://dfw.cbslocal.com/wp-content/uploads/sites/15909545/2021/01/James.jpg?w=1500",
            "language": "de",
            "category": [
                "dallas",
                "regional"
            ],
            "published": "2021-01-08 15:15:27 +0000"
        },
        {
            "id": "5a3060aa-bb9f-46a6-887c-c5388900105d",
            "title": "LeBron James: Capitol Riots Show 'We Live In Two Americas'",
            "description": "LOS ANGELES (CBSLA) — NBA players and coaches from around the country have spent the last two days discussing the violence and chaos that broke out Wednesday when a mob of President Trump's supporters stormed the U.S. Capitol building. For Lakers star LeBron James, the moment was illustrative of the...",
            "url": "https://losangeles.cbslocal.com/2021/01/08/lebron-james-capitol-riots-president-trump-two-americas/",
            "author": "CBSLA Staff",
            "image": "https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2021/01/James.jpg?w=1500",
            "language": "de",
            "category": [
                "regional",
                "los-angeles",
                "california"
            ],
            "published": "2021-01-08 15:15:27 +0000"
        },
        {
            "id": "d79e74b2-abb1-4e7e-8d4b-69c94593e1d2",
            "title": "LeBron James: Capitol Riots Show 'We Live In Two Americas'",
            "description": "LOS ANGELES (CBSLA) — NBA players and coaches from around the country have spent the last two days discussing the violence and chaos that broke out Wednesday when a mob of President Trump's supporters stormed the U.S. Capitol building. For Lakers star LeBron James, the moment was illustrative of the...",
            "url": "https://tampa.cbslocal.com/2021/01/08/lebron-james-capitol-riots-president-trump-two-americas/",
            "author": "CBS Tampa",
            "image": "https://tampa.cbslocal.com/wp-content/uploads/sites/15909843/2021/01/James.jpg?w=1500",
            "language": "de",
            "category": [
                "regional",
                "tampa"
            ],
            "published": "2021-01-08 15:15:27 +0000"
        },
        {
            "id": "90d6a084-e55e-4f75-96e3-f4c5e2c87a5f",
            "title": "LeBron James and Gregg Popovich voice anger over Capitol riot before and after Lakers-Spurs game",
            "description": "Two of the NBA’s most prominent voices — as well as consistent sources of criticism of President Trump — joined the chorus of NBA players and coaches who have decried the violent breach of the U.S. Capitol as well of President Trump’s role in the brief insurrection.",
            "url": "https://www.washingtonpost.com/sports/2021/01/08/gregg-popovich-trump-removal/",
            "author": "Des Bieler and Ben Golliver",
            "image": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NPHLKIVXNBFE7MQGESYAWPVEQ4.jpg&w=1440",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 14:41:03 +0000"
        },
        {
            "id": "adf4cc09-3a0b-4012-88f7-01412f4ac4d1",
            "title": "LeBron James on Riots at U.S. Capitol: 'We Live in Two Americas'",
            "description": "LeBron James...",
            "url": "https://www.breitbart.com/sports/2021/01/08/lebron-james-on-riots-at-u-s-capitol-we-live-in-two-americas/",
            "author": "Dylan Gwinn",
            "image": "https://media.breitbart.com/media/2020/08/Lebron.jpg",
            "language": "en",
            "category": [
                "politics"
            ],
            "published": "2021-01-08 14:31:45 +0000"
        },
        {
            "id": "7ca9cc0d-9c1e-44f6-b1a8-e558585901b4",
            "title": "LeBron James reacts to riot: We live in two Americas",
            "description": "The NBA world has been quick to respond to the riot at the US Capitol on January 6. Players, coaches and teams have been speaking out and denouncing the harrowing scenes.",
            "url": "https://edition.cnn.com/videos/sports/2021/01/08/nba-reaction-us-capitol-pro-trump-riot-lebron-james-draymond-green-spt-intl-lon-orig.cnn",
            "author": "cnn",
            "image": "https://cdn.cnn.com/cnnnext/dam/assets/210108112035-03-draymond-green-file-restricted-super-tease.jpg",
            "language": "en",
            "category": [
                "general"
            ],
            "published": "2021-01-08 13:34:56 +0000"
        },
        {
            "id": "ed34c8cb-533b-4a15-9781-faa0bd28df53",
            "title": "'You just show them the photos.' How LeBron James says he talks to his children about the double standard of the US Capitol riots",
            "description": "When asked how he talks to his children about Wednesday's chaos in Washington, DC, LeBron James responded, \"You just show them the photos.\"",
            "url": "https://edition.cnn.com/2021/01/08/sport/lebron-james-us-capitol-riots-spt-trnd/index.html",
            "author": "Christina Maxouris, CNN",
            "image": "https://cdn.cnn.com/cnnnext/dam/assets/210108090445-lebron-james-0107-grab-super-tease.jpg",
            "language": "en",
            "category": [
                "general"
            ],
            "published": "2021-01-08 12:37:23 +0000"
        },
        {
            "id": "fec96e3e-4de9-4315-a140-5f854ff6e7ec",
            "title": "24 movies to watch in 2021",
            "description": "It might be tempting the universe to present you with, well, something to look forward to.\nI say that because rereading my list of the most anticipated movies of 2020 is a sort of ironic survey of an industry in turmoil: now we have the hindsight to know of the shooting schedules that would be scram...",
            "url": "https://theweek.com/articles/958540/24-movies-watch-2021",
            "author": "Jeva Lange",
            "image": "None",
            "language": "en",
            "category": [
                "general"
            ],
            "published": "2021-01-08 11:00:03 +0000"
        },
        {
            "id": "bcc42c64-669f-4d5d-add9-12c8ee462255",
            "title": "LeBron James has scathing words about President Trump and the state of America",
            "description": "Lakers star Lebron James shares his thoughts on the U.S Capitol riot and President Trump: 'Those events were because of him.'...",
            "url": "https://www.latimes.com/sports/lakers/story/2021-01-08/lebron-james-reacts-scathing-words-trump-america",
            "author": "@DanWoikeSports",
            "image": "https://ca-times.brightspotcdn.com/dims4/default/8031473/2147483647/strip/true/crop/4800x2700+0+331/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F95%2F9b%2F6103b9f94cba946d59774c9dc6d1%2Fla-photos-1staff-683231-la-sp-lakers-spurs009-ls.jpg",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 10:30:56 +0000"
        },
        {
            "id": "914446b5-fbce-45df-ba7c-f9116af86f3d",
            "title": "LeBron James 'in that same genre' as Muhammad Ali for sport, according to legendary NBA coach Gregg Popovich",
            "description": "LeBron James has taken on Muhammad Ali's mantle in terms of his willingness to speak out about the \"social issues of our time,\" according to San Antonio Spurs head coach Gregg Popovich.",
            "url": "https://edition.cnn.com/2021/01/08/sport/lebron-james-gregg-popovich-nba-washington-riots-spt-intl/index.html",
            "author": "Ben Morse, CNN",
            "image": "https://cdn.cnn.com/cnnnext/dam/assets/210108040904-02-gregg-popovich-lebron-james-washington-restricted-super-tease.jpg",
            "language": "en",
            "category": [
                "general"
            ],
            "published": "2021-01-08 10:22:35 +0000"
        },
        {
            "id": "0d36778f-56ba-4e85-aa21-e091ba953686",
            "title": "LeBron on Capitol siege: 'We live in two Americas'",
            "description": "Los Angeles Lakers star LeBron James said Wednesday's breach of the U.S. Capitol made him wonder if police would have responded differently if the group of insurgents had been mostly Black people.",
            "url": "https://www.espn.com/nba/story/_/id/30672218/us-capitol-siege-shows-live-two-americas",
            "author": "Dave McMenamin",
            "image": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0108%2Fr799235_1296x729_16%2D9.jpg",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 08:26:00 +0000"
        },
        {
            "id": "f27f0d7c-d402-45e6-a5b5-8c4be2828028",
            "title": "Lakers' LeBron James on rioters at Capitol: 'If those were my kind, what would've been the outcome?'",
            "description": "LeBron James expressed his outrage over the double standard in how pro-Trump rioters were treated compared to Black Lives Matter protesters.",
            "url": "https://www.usatoday.com/story/sports/nba/lakers/2021/01/08/lebron-james-reaction-donald-trump-supporters-riot-storm-capitol/6592451002/",
            "author": "Mark Medina",
            "image": "https://www.gannett-cdn.com/presto/2021/01/08/USAT/5132b64a-355b-4c29-9b2b-b023fdc05471-2021-01-07_LeBron_James.jpg?crop=1970,1108,x1156,y135&width=1600&height=800&fit=bounds",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 08:13:02 +0000"
        },
        {
            "id": "8eb1adcb-8aa3-4c9d-90df-d9152c3dadd1",
            "title": "James on this week's unrest: \"We live in two Americas\"",
            "description": "LOS ANGELES (AP) — LeBron James and his Los Angeles Lakers teammates were already upset after a Wisconsin prosecutor on Tuesday decided not to charge a police officer who shot a Black man last year. Then came Wednesday when a violent mob loyal to President Donald Trump stormed the U.S. Capitol to de...",
            "url": "https://www.seattletimes.com/sports/nba/james-on-this-weeks-unrest-we-live-in-two-americas/",
            "author": "JOE REEDY",
            "image": "None",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 07:50:45 +0000"
        },
        {
            "id": "a1928a89-6115-44a6-affe-7757643c72e6",
            "title": "James on this week’s unrest: “We live in two Americas”",
            "description": "LeBron James and his Los Angeles Lakers teammates were already upset after a Wisconsin prosecutor on Tuesday decided not to charge a police officer who shot a Black man last year.",
            "url": "https://m.washingtontimes.com/news/2021/jan/8/james-on-this-weeks-unrest-we-live-in-two-americas/",
            "author": "JOE REEDY",
            "image": "https://twt-thumbs.washtimes.com/media/image/2021/01/08/spurs_lakers_basketball_13057_c0-176-4209-2630_s1770x1032.jpg?3abb27c58b7af8b75b15088d8973fcd18d5bc50b",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 07:50:45 +0000"
        },
        {
            "id": "b0f4d2ee-dfae-4dee-a05e-7f34d37e9bc2",
            "title": "James on this week's unrest: \"We live in two Americas\"",
            "description": "LeBron James and his Los Angeles Lakers teammates were already upset after a Wisconsin prosecutor on Tuesday decided not to charge a police officer who shot a Black man last year.Then came Wednesday when a violent mob loyal to President Donald Trump stormed the U.S. Capitol to delay Congress from ce...",
            "url": "https://www.wsls.com/sports/2021/01/08/james-on-this-weeks-unrest-we-live-in-two-americas/",
            "author": "Associated Press",
            "image": "https://www.wsls.com/resizer/58I9waHD-H7pBNDC5_TwNTTfpJc=/1600x1066/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/YZDUEM3RYFBPBOOSAMZKHQRZQE.jpg",
            "language": "en",
            "category": [],
            "published": "2021-01-08 07:50:45 +0000"
        },
        {
            "id": "bd232269-0db4-44e5-8f55-f09203e01ec4",
            "title": "Spurs snap Lakers' win streak",
            "description": "A trip to Los Angeles proved to be just what the San Antonio Spurs needed to snap out of an early-season slump.\nTwo nights after beating the Clippers to snap a four-game losing streak, the Spurs picked up another win at Staples Center on Thursday, this time defeating the Lakers 118-109.\nLaMarcus Ald...",
            "url": "https://www.sfgate.com/sports/article/Spurs-snap-Lakers-win-streak-15854886.php",
            "author": "Chronicle News Services",
            "image": "None",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 06:16:20 +0000"
        },
        {
            "id": "eca2e212-fa4a-4db8-8e24-9221dc58debb",
            "title": "Spurs snap Lakers' win streak",
            "description": "A trip to Los Angeles proved to be just what the San Antonio Spurs needed to snap out of an early-season slump.\nTwo nights after beating the Clippers to snap a four-game losing streak, the Spurs picked up another win at Staples Center on Thursday, this time defeating the Lakers 118-109.\nLaMarcus Ald...",
            "url": "https://www.sfchronicle.com/sports/article/Spurs-snap-Lakers-win-streak-15854886.php",
            "author": "Chronicle News Services",
            "image": "None",
            "language": "en",
            "category": [
                "regional",
                "san-francisco",
                "california"
            ],
            "published": "2021-01-08 06:16:20 +0000"
        },
        {
            "id": "cc30c85d-d59e-465e-b37d-cf812a7673b1",
            "title": "Lakers fall flat in fourth as winning streak ends against Spurs",
            "description": "Los Angeles Lakers forward LeBron James (23) shoots during the second quarter of the team's NBA basketball game against the San Antonio Spurs on Thursday, Jan. 7, 2021, in Los Angeles. (AP Photo/Ashley Landis)\nSpurs forward LaMarcus Aldridge, left, defends against Lakers guard Talen Horton-Tucker du...",
            "url": "https://www.pe.com/2021/01/07/lakers-fall-flat-in-fourth-as-winning-streak-ends-against-spurs/",
            "author": "Kyle Goon",
            "image": "https://www.pe.com/wp-content/uploads/2021/01/Spurs-Lakers-Basketball-11-2.jpg?w=640",
            "language": "en",
            "category": [
                "national"
            ],
            "published": "2021-01-08 05:50:43 +0000"
        },
        {
            "id": "428b785d-0918-41bf-abf0-8d2a32a76eb5",
            "title": "They Love LA: Spurs Snap Lakers 4-Game Winning Streak",
            "description": "LOS ANGELES (AP) — A trip to Los Angeles proved to be just what the San Antonio Spurs needed to snap out of an early-season slump.\nTwo nights after beating the Clippers to snap a four-game losing streak, the Spurs picked up another win at Staples Center on Thursday, this time defeating the Los Angel...",
            "url": "https://losangeles.cbslocal.com/2021/01/07/los-angeles-lakers-fall-to-san-antonio-spurs-118-109/",
            "author": "CBS Los Angeles",
            "image": "https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2021/01/AP21008151213057.jpg?w=1500",
            "language": "en",
            "category": [
                "regional",
                "los-angeles",
                "california"
            ],
            "published": "2021-01-08 05:43:55 +0000"
        },
        {
            "id": "d6fdb042-ea36-4266-8d01-945bcfcb185d",
            "title": "Nike Basketball Shares Official Look at the LeBron 18 \"Dunkman\"",
            "description": "Even at 36 years old with 17 seasons under his belt, LeBron James still manages to thrive when playing above the rim. And so as a result, the Nike Basketball team has decided to fittingly revive James' \"Dunkman\" motif onto the LeBron 18.The \"Dunkman\" alter ego dates all the way back to 2003, The Cho...",
            "url": "https://hypebeast.com/2021/1/nike-lebron-18-dunkman-cq9284-005-release-info",
            "author": "HYPEBEAST",
            "image": "None",
            "language": "en",
            "category": [
                "fashion",
                "lifestyle"
            ],
            "published": "2021-01-08 01:34:35 +0000"
        },
        {
            "id": "1c477426-f6ca-467d-a2ae-120f8f036cb9",
            "title": "LeBron James Called Out The ‘2 AMERIKKKAS’ Shown By The Capitol Riot",
            "description": "Getty Image \n\nThe majority of NBA teams took the floor on Wednesday evening, mere minutes after a group of Donald Trump supporters stormed the U.S. Capitol building. In the wake of what was a terrible day in the United States, many NBA figures weighed in on the obvious double standard of how the eve...",
            "url": "https://uproxx.com/dimemag/lebron-james-capitol-riot-double-standard-instagram-lakers-statement-shirt/",
            "author": "Brad Rowland",
            "image": "https://uproxx.com/wp-content/uploads/2020/10/bron2.jpg?w=710",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-08 00:37:37 +0000"
        },
        {
            "id": "9c15299d-b4d4-4c0d-91cb-65e91331a981",
            "title": "Report: The Lakers Want To Visit The White House Once Trump Is Gone",
            "description": "Getty Image \n\nIt's been a hot minute since NBA teams have made the ceremonial trip to the White House that all teams make after winning a championship. Following the Golden State Warriors' title victory in 2017, the team made it clear that it had no interest in visiting Donald Trump. After that happ...",
            "url": "https://uproxx.com/dimemag/report-lakers-white-house-visit-trump-biden/",
            "author": "Bill DiFilippo",
            "image": "https://uproxx.com/wp-content/uploads/2020/10/lebron-trophies.jpg?w=1024",
            "language": "en",
            "category": [
                "sports"
            ],
            "published": "2021-01-07 21:25:02 +0000"
        }
    ],
    "page": 1
}



const LatestNews = () => {
    const [title, setTitle] = useState("Latest News")
    const [articles, setArticles] = useState({})

    function fetchNews(){
        console.log("begin fetch")
        axios.get('https://api.currentsapi.services/v1/latest-news/?&&page_number=1&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0')
        .then(res => {
            console.log("RESPONSE", res)
            return res
        })
            .catch(err =>{
                console.log("Error", err )
            })
    }

    useEffect(() => {
        fetchNews().then((data) => {
          setArticles(data)
          console.log("hello2", data)
        })
    }, [])

    

  return (
    <div>
      <MenuBar />
      <Title title={title}/>
      <ContentCard articles={articles}/>
    </div>
  );
}

export default LatestNews
