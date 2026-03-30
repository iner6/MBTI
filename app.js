// === INER Cognitive Function Quiz ===
// app.js - Main application

(function() {
'use strict';

// ==================== DATA ====================
const questions = [
// === SECTION A (Q1-Q20): Single-select, 6 options ===
{id:1,sec:'A',zh:"你走進一間從未去過的古董店，你第一件事會？",en:"You walk into an antique shop for the first time. What do you do first?",opts:[
{zh:"環顧四周，看看有什麼特別顯眼或有質感的東西",en:"Look around for eye-catching or textured items",f:"Se"},
{zh:"想起以前去過的類似店鋪，和記憶中的做比較",en:"Recall similar shops you've visited and compare",f:"Si"},
{zh:"腦中開始浮現這些物件背後可能的歷史脈絡",en:"Start imagining the historical context behind these objects",f:"Ni"},
{zh:"隨手拿起幾件東西，開始聯想它們之間的關聯",en:"Pick up items and start connecting them mentally",f:"Ne"},
{zh:"觀察店鋪的動線和陳列方式，評估它的經營效率",en:"Observe the layout and evaluate its business efficiency",f:"Te"},
{zh:"感受整間店的氛圍，注意到店主的表情和態度",en:"Feel the atmosphere, notice the owner's expression",f:"Fe"}]},
{id:2,sec:'A',zh:"朋友送你一盒沒有說明書的拼圖，你打開後會？",en:"A friend gives you a puzzle with no instructions. After opening it, you...",opts:[
{zh:"把所有碎片倒出來，按顏色和邊緣分類整理",en:"Dump all pieces out and sort by color and edge",f:"Te"},
{zh:"拿起幾塊試拼看看，邊拼邊摸索",en:"Pick up a few pieces and try fitting them",f:"Se"},
{zh:"先觀察盒子上的圖案，在腦中預想完成後的樣子",en:"Study the box image and visualize the finished puzzle",f:"Ni"},
{zh:"回想以前拼拼圖的經驗，用熟悉的方法開始",en:"Recall past puzzle experiences and use familiar methods",f:"Si"},
{zh:"想著不按原圖拼，自創一個新圖案",en:"Think about not following the original picture, creating something new",f:"Ne"},
{zh:"先研究幾塊碎片的形狀邏輯，找出它們的連接規則",en:"Study piece shapes logically to find connection rules",f:"Ti"}]},
{id:3,sec:'A',zh:"你被邀請參加一個陌生人居多的聚會，到了現場你最可能？",en:"You're invited to a party full of strangers. Upon arriving, you most likely...",opts:[
{zh:"找一個角落靜靜觀察，等有感覺再決定下一步",en:"Find a corner to quietly observe before deciding your next move",f:"Fi"},
{zh:"掃視環境，找到食物、音樂或有趣的活動先體驗",en:"Scan for food, music, or activities to experience first",f:"Se"},
{zh:"主動找看起來落單的人聊天，讓大家都自在一些",en:"Approach someone who looks alone to make everyone comfortable",f:"Fe"},
{zh:"觀察人群的互動模式，試著理解這個社交圈怎麼運作",en:"Observe interaction patterns to understand how this social circle works",f:"Ti"},
{zh:"回想上次類似場合的經驗，用相同策略應對",en:"Recall how you handled similar situations before",f:"Si"},
{zh:"隨意跟不同的人搭話，看看能碰撞出什麼有趣話題",en:"Chat with random people to see what interesting topics emerge",f:"Ne"}]},
{id:4,sec:'A',zh:"你收到一份工作任務，截止日期是兩週後。你會？",en:"You receive a work task due in two weeks. You...",opts:[
{zh:"立刻制定時間表和步驟清單，按計劃推進",en:"Immediately create a timeline and checklist",f:"Te"},
{zh:"先花時間理解任務的核心問題，確保方向正確",en:"Spend time understanding the core problem first",f:"Ni"},
{zh:"回想過去做類似任務的經驗，沿用有效的做法",en:"Recall past experiences with similar tasks",f:"Si"},
{zh:"先不管任務要求，到處看看有沒有完全不同的切入方式，甚至跨領域找靈感",en:"Ignore the brief for now and explore wildly different angles, even cross-disciplinary inspiration",f:"Ne"},
{zh:"在腦中反覆推演任務的因果關係，直到建立一個自洽的理解模型",en:"Mentally trace cause-and-effect until you build an internally consistent model",f:"Ti"},
{zh:"想想這份任務對團隊或他人的意義，從中找到動力",en:"Think about what this task means for the team to find motivation",f:"Fe"}]},
{id:5,sec:'A',zh:"你在逛跳蚤市場，一個攤位擺滿各種舊物件。你被什麼吸引？",en:"At a flea market stall full of old items, what catches your eye?",opts:[
{zh:"一個手感特別好的皮革筆記本，摸起來很舒服",en:"A leather notebook with amazing texture",f:"Se"},
{zh:"一張泛黃的老照片，讓你想起某段記憶",en:"A yellowed old photo that reminds you of a memory",f:"Si"},
{zh:"一個造型奇特的機械裝置，你想搞清楚它怎麼運作",en:"A strange mechanical device you want to figure out",f:"Ti"},
{zh:"一組看起來可以被改造成新用途的舊零件",en:"Old parts that could be repurposed into something new",f:"Ne"},
{zh:"一本寫滿註記的舊書，你想知道前主人是個什麼樣的人",en:"An annotated old book — you wonder about its previous owner",f:"Fi"},
{zh:"一個很有年代感的物件，你直覺它會很有收藏價值",en:"A vintage item your intuition says will be valuable",f:"Ni"}]},
{id:6,sec:'A',zh:"你和朋友在討論一部電影的結局，你最想表達的是？",en:"Discussing a movie's ending with friends, you most want to express...",opts:[
{zh:"結局的伏筆其實從開頭就埋好了，整部片有一條隱藏的線",en:"The foreshadowing was there from the start — there's a hidden thread",f:"Ni"},
{zh:"你個人對結局的真實感受，不管別人怎麼看",en:"Your genuine personal feelings about the ending",f:"Fi"},
{zh:"結局的邏輯有沒有漏洞，劇情是否自洽",en:"Whether the ending has plot holes or logical inconsistencies",f:"Ti"},
{zh:"你注意到的畫面細節、配樂或演員的微表情",en:"Visual details, soundtrack, or actors' micro-expressions you noticed",f:"Se"},
{zh:"這個結局可以有多少種不同的解讀方式",en:"How many different interpretations the ending could have",f:"Ne"},
{zh:"大家對這部電影的看法，你很想聽聽每個人的觀點",en:"Everyone's opinions — you want to hear each person's take",f:"Fe"}]},
{id:7,sec:'A',zh:"你搬進一間空白的新房間，開始佈置時你的第一步是？",en:"Moving into a blank new room, your first step in decorating is...",opts:[
{zh:"先在腦中構思一個整體的風格和氛圍",en:"Visualize an overall style and atmosphere in your mind",f:"Ni"},
{zh:"參考之前住過的房間，沿用讓你舒適的佈置方式",en:"Reference previous rooms and reuse comfortable arrangements",f:"Si"},
{zh:"去逛各種風格的店，收集靈感再混搭",en:"Browse different stores for inspiration and mix-match",f:"Ne"},
{zh:"先確定家具的功能性和動線，讓空間使用效率最高",en:"Determine furniture functionality and flow for maximum efficiency",f:"Te"},
{zh:"摸摸材質、看看光線，選讓身體感覺最舒服的配置",en:"Feel textures, check lighting, choose what feels physically best",f:"Se"},
{zh:"佈置一個讓來訪的朋友也會覺得溫馨放鬆的空間",en:"Create a space that visiting friends would find warm and relaxing",f:"Fe"}]},
{id:8,sec:'A',zh:"在一場團隊腦力激盪中，你最自然的角色是？",en:"In a team brainstorming session, your most natural role is...",opts:[
{zh:"不斷丟出新點子，讓討論保持活力",en:"Constantly throwing out new ideas to keep discussion lively",f:"Ne"},
{zh:"把大家的想法整理成可執行的方案",en:"Organizing everyone's ideas into actionable plans",f:"Te"},
{zh:"默默聽完所有人的觀點，然後指出核心問題在哪",en:"Listening to all views, then pointing out the core issue",f:"Ni"},
{zh:"確保每個人都有發言機會，沒有人被忽略",en:"Making sure everyone gets a chance to speak",f:"Fe"},
{zh:"檢查每個想法的邏輯是否站得住腳",en:"Checking if each idea is logically sound",f:"Ti"},
{zh:"根據過去的成功經驗，建議最可行的方向",en:"Suggesting the most viable direction based on past successes",f:"Si"}]},
{id:9,sec:'A',zh:"你在路上看到一幅巨大的街頭塗鴉，你的第一反應是？",en:"Seeing a huge street mural, your first reaction is...",opts:[
{zh:"注意到色彩的衝擊力和線條的力道",en:"Notice the impact of colors and strength of lines",f:"Se"},
{zh:"開始想這幅畫背後想傳達的深層訊息",en:"Start thinking about the deeper message behind it",f:"Ni"},
{zh:"聯想到其他類似的藝術作品或文化現象",en:"Connect it to other similar artworks or cultural phenomena",f:"Ne"},
{zh:"分析它的構圖技法和創作邏輯，想搞懂它怎麼被畫出來的",en:"Analyze its composition technique and creative logic — you want to understand how it was made",f:"Ti"},
{zh:"想到這幅畫可能對路過的人產生什麼情感影響",en:"Think about the emotional impact on passersby",f:"Fe"},
{zh:"覺得它讓你想起了某個地方或某段經歷",en:"Feel it reminds you of a place or experience",f:"Si"},
{zh:"你內心馬上有一個強烈的好惡反應——喜歡就是喜歡，不喜歡就是不喜歡",en:"You immediately have a strong like/dislike reaction — it's visceral and personal",f:"Fi"}]},
{id:10,sec:'A',zh:"你在書店隨手翻開一本書，什麼會讓你繼續讀下去？",en:"Flipping open a book in a bookstore, what makes you keep reading?",opts:[
{zh:"開頭描繪了一個你彷彿能置身其中的場景",en:"An opening that paints a scene you feel immersed in",f:"Se"},
{zh:"第一句話就提出了一個顛覆常識的觀點",en:"A first sentence that challenges conventional wisdom",f:"Ne"},
{zh:"你感覺到作者的語氣很真誠，和你有某種共鳴",en:"The author's tone feels genuine and resonates with you",f:"Fi"},
{zh:"開頭提出了一個邏輯清晰的問題，你想知道答案",en:"A clear logical question posed at the start",f:"Ti"},
{zh:"這本書的結構和論述方式看起來很專業有系統",en:"The book's structure and argumentation look professional",f:"Te"},
{zh:"開頭讓你聯想到某個你一直在思考的深層問題",en:"The opening connects to a deep question you've been pondering",f:"Ni"}]},
{id:11,sec:'A',zh:"你正在學一項全新的技能（例如陶藝），你會怎麼開始？",en:"Learning a brand new skill (e.g., pottery), how do you start?",opts:[
{zh:"直接上手感受材料的觸感和重量，專注在手指和工具接觸的感覺",en:"Get your hands on the material, feeling its texture and weight, focusing on the sensation of fingers meeting clay",f:"Se"},
{zh:"先看教學影片和範例，了解標準流程後再開始",en:"Watch tutorials and examples first, then follow the standard process",f:"Si"},
{zh:"自己摸索規律，搞懂背後的原理再動手",en:"Figure out the underlying principles before starting",f:"Ti"},
{zh:"想想學會之後可以用在什麼有趣的地方",en:"Think about interesting applications after mastering it",f:"Ne"},
{zh:"找一個老師或社群，和別人一起學更有動力",en:"Find a teacher or community — learning with others motivates you",f:"Fe"},
{zh:"制定一個練習計劃和階段性目標",en:"Create a practice plan with milestone goals",f:"Te"}]},
{id:12,sec:'A',zh:"一個安靜的午後你獨處著，你最可能在做什麼？",en:"On a quiet afternoon alone, you're most likely...",opts:[
{zh:"回味最近的某段經歷，在腦中重新體驗每個細節",en:"Reliving a recent experience in vivid detail",f:"Si"},
{zh:"天馬行空地想各種有的沒的，享受思緒漫遊",en:"Letting your mind wander freely through random thoughts",f:"Ne"},
{zh:"沉浸在某個問題裡，試著釐清自己的邏輯",en:"Immersed in a problem, trying to clarify your logic",f:"Ti"},
{zh:"對著窗外放空，腦中突然浮現某個關於未來的畫面",en:"Staring out the window when a vision of the future appears",f:"Ni"},
{zh:"想著某個朋友最近過得好不好，考慮關心一下",en:"Wondering if a friend is doing okay, considering reaching out",f:"Fe"},
{zh:"做一些讓身體放鬆的事——泡茶、聽音樂、拉筋",en:"Doing something physically relaxing — tea, music, stretching",f:"Se"}]},
{id:13,sec:'A',zh:"你迷路了，手機也沒電。你會怎麼辦？",en:"You're lost and your phone is dead. What do you do?",opts:[
{zh:"仔細回想來時的路線，試著原路返回",en:"Carefully recall the route you took and retrace your steps",f:"Si"},
{zh:"觀察周圍的地標、太陽方向等線索來判斷位置",en:"Observe landmarks, sun direction, and other clues",f:"Se"},
{zh:"直覺告訴你往某個方向走，你選擇相信這股感覺",en:"Your gut tells you to go a certain way — you trust it",f:"Ni"},
{zh:"找路人問路，順便聊幾句讓自己安心",en:"Ask a passerby for directions and chat a bit to feel calmer",f:"Fe"},
{zh:"嘗試不同的路徑，說不定會發現意想不到的路",en:"Try different paths — maybe you'll find something unexpected",f:"Ne"},
{zh:"冷靜下來，用邏輯分析幾個可能的方向再做選擇",en:"Stay calm, logically analyze possible directions, then choose",f:"Ti"}]},
{id:14,sec:'A',zh:"你整理房間時發現一個遺忘的舊箱子，裡面是你小時候的東西。你會？",en:"While cleaning, you find a forgotten box of childhood items. You...",opts:[
{zh:"一件一件拿出來看，回憶每個物品背後的故事",en:"Take items out one by one, remembering each story",f:"Si"},
{zh:"感受到一股情緒湧上來，靜靜地感受這一刻",en:"Feel emotions welling up and sit quietly with the moment",f:"Fi"},
{zh:"拍照分享給家人或朋友，一起回憶",en:"Take photos to share with family or friends",f:"Fe"},
{zh:"想著這些東西可以怎麼重新利用或改造",en:"Think about how to repurpose or transform these items",f:"Ne"},
{zh:"把東西分類整理好，決定哪些留、哪些捐",en:"Sort everything and decide what to keep vs. donate",f:"Te"},
{zh:"從這些物品中看到自己成長的軌跡和轉變",en:"See your growth trajectory and transformation through these items",f:"Ni"}]},
{id:15,sec:'A',zh:"你要為一個完全不認識的人挑選禮物，只知道對方的年齡和性別。你會？",en:"Choosing a gift for a stranger, knowing only their age and gender. You...",opts:[
{zh:"選一個大多數人都會喜歡的安全選項",en:"Choose a safe option most people would like",f:"Fe"},
{zh:"根據網路評價和銷售數據，選評分最高的商品",en:"Pick the highest-rated product based on reviews and data",f:"Te"},
{zh:"回想自己或身邊的人在那個年紀通常喜歡什麼",en:"Recall what you or people you know liked at that age",f:"Si"},
{zh:"跟著直覺走，選一個你覺得「就是它了」的東西",en:"Follow your intuition and pick something that just feels right",f:"Ni"},
{zh:"選一個有創意或獨特性的東西，讓對方驚喜",en:"Choose something creative or unique to surprise them",f:"Ne"},
{zh:"選一個你自己真心覺得好的東西，不去猜對方喜好",en:"Pick something you genuinely think is good, without guessing their taste",f:"Fi"}]},
{id:16,sec:'A',zh:"你的朋友提出了一個你認為有問題的計劃，你會？",en:"Your friend proposes a plan you think has issues. You...",opts:[
{zh:"直接指出邏輯上的漏洞，幫他把計劃修好",en:"Point out logical flaws directly and help fix the plan",f:"Ti"},
{zh:"先肯定他的想法，再委婉地提出你的擔憂",en:"Affirm their idea first, then gently raise concerns",f:"Fe"},
{zh:"提供幾個替代方案讓他選擇",en:"Offer several alternative plans to choose from",f:"Ne"},
{zh:"用數據和實例來說明為什麼可能行不通",en:"Use data and examples to show why it might not work",f:"Te"},
{zh:"分享你過去類似經驗中學到的教訓",en:"Share lessons from your past similar experiences",f:"Si"},
{zh:"先看看這個計劃是否違反你內心的價值判斷",en:"Check if the plan violates your inner value system first",f:"Fi"}]},
{id:17,sec:'A',zh:"考試前一晚，你會怎麼準備？",en:"The night before an exam, how do you prepare?",opts:[
{zh:"按照自己整理的筆記和重點複習，走一遍熟悉的流程",en:"Review your organized notes following a familiar routine",f:"Si"},
{zh:"把所有概念之間的關係畫成一張邏輯圖",en:"Map all concepts into a logical diagram",f:"Ti"},
{zh:"預測可能會考的重點，針對性地準備",en:"Predict likely exam topics and prepare accordingly",f:"Ni"},
{zh:"和同學一起複習，互相提問和討論",en:"Study with classmates, quizzing and discussing together",f:"Fe"},
{zh:"做模擬考題，用實際成績檢驗掌握程度",en:"Do practice exams to test your actual grasp",f:"Te"},
{zh:"翻翻不同的參考資料，看看有沒有遺漏的角度",en:"Browse different references to check for missed angles",f:"Ne"}]},
{id:18,sec:'A',zh:"你在做一道從沒做過的料理，發現缺少一種關鍵食材。你會？",en:"Cooking a new dish, you discover a key ingredient is missing. You...",opts:[
{zh:"想想現有食材可以怎麼替代，即興發揮",en:"Think about substitutions with what you have — improvise",f:"Ne"},
{zh:"上網搜尋最多人推薦的替代方案和比例",en:"Search online for the most recommended substitutes",f:"Te"},
{zh:"回想以前做過的類似料理，用經驗判斷替代品",en:"Recall similar dishes you've made and judge substitutes from experience",f:"Si"},
{zh:"邊做邊嚐，用舌頭和鼻子即時調整味道和口感",en:"Taste and smell as you go, adjusting flavor and texture in real-time with your senses",f:"Se"},
{zh:"分析這個食材在料理中的作用，找功能等價的替代物",en:"Analyze the ingredient's role and find a functional equivalent",f:"Ti"},
{zh:"直覺覺得某個東西可以替代，而且最後可能更好吃",en:"Intuitively feel something could substitute — and might taste even better",f:"Ni"}]},
{id:19,sec:'A',zh:"一個不熟的人在社群媒體上對你發了一條帶有敵意的評論，你的第一反應是？",en:"A stranger posts a hostile comment about you on social media. Your first reaction is...",opts:[
{zh:"分析對方的論點，如果有邏輯漏洞就回覆指出",en:"Analyze their argument and reply pointing out logical flaws",f:"Ti"},
{zh:"感到不舒服，但更在意自己是否真的做錯了什麼",en:"Feel uncomfortable, but focus more on whether you actually did something wrong",f:"Fi"},
{zh:"想著各種可能的回應方式，以及事情會怎麼發展",en:"Consider various response options and how things might unfold",f:"Ne"},
{zh:"想看看其他人怎麼回應，或先私下問朋友的意見",en:"Check how others respond, or privately ask friends for advice",f:"Fe"},
{zh:"看看對方的過往發言，收集資訊判斷對方的動機",en:"Check their post history to gather info about their motives",f:"Te"},
{zh:"關掉手機去做別的事，讓身體的活動把注意力帶走",en:"Close the phone and go do something physical — let activity take your mind off it",f:"Se"},
{zh:"直覺這件事根本不重要，不值得花任何心力去理會",en:"Intuitively feel this simply doesn't matter — not worth any mental energy",f:"Ni"}]},
{id:20,sec:'A',zh:"你有一整天的自由時間，沒有任何安排。你醒來後最可能？",en:"You have a completely free day. After waking up, you most likely...",opts:[
{zh:"做一些身體想做的事——運動、散步、嘗試新餐廳",en:"Do something physical — exercise, walk, try a new restaurant",f:"Se"},
{zh:"重溫一部喜歡的電影或書，享受那種熟悉的感覺",en:"Rewatch a favorite movie or reread a book for familiar comfort",f:"Si"},
{zh:"探索一個你最近感興趣的新領域或新技能",en:"Explore a new field or skill you've been curious about",f:"Ne"},
{zh:"安靜地待著，讓腦子自由地想事情",en:"Stay quiet and let your mind think freely",f:"Ni"},
{zh:"整理一下待辦事項，處理一些一直拖著的雜事",en:"Organize your to-do list and tackle lingering tasks",f:"Te"},
{zh:"聯絡朋友或家人，約出來見面聊天",en:"Contact friends or family to meet up and chat",f:"Fe"}]},
// === SECTION B (Q21-Q34): Slider 1-7 ===
{id:21,sec:'B',zh:"你的思緒像一條河流，總是從一個想法自然地流向另一個看似無關的想法。",en:"Your thoughts are like a river, naturally flowing from one idea to another seemingly unrelated one.",f:"Ne",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:22,sec:'B',zh:"你像一台精密的儀器，會自動檢查事物的內部邏輯是否一致。",en:"You're like a precision instrument, automatically checking if things are internally consistent.",f:"Ti",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:23,sec:'B',zh:"你像一面鏡子，會不自覺地吸收周圍人的情緒——即使那些情緒跟你無關，你也會受到影響。",en:"You're like a mirror that unconsciously absorbs others' emotions — even when those feelings have nothing to do with you, they still affect you.",f:"Fe",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:24,sec:'B',zh:"你像一棵老樹，根系深植在過去的經驗裡，每一圈年輪都是你的參考依據。",en:"You're like an old tree, roots deep in past experience, each ring a reference point.",f:"Si",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:25,sec:'B',zh:"你像一隻獵鷹，總是第一時間捕捉到環境中的變化和動態。",en:"You're like a hawk, always the first to catch changes in your environment.",f:"Se",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:26,sec:'B',zh:"你像一座燈塔，內心有一束不會被外界動搖的光。",en:"You're like a lighthouse, with an inner light that can't be shaken by the outside world.",f:"Fi",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:27,sec:'B',zh:"你像一個漩渦，不管接收到多少資訊，最後都會在腦中匯聚成一個清晰的結論。",en:"You're like a whirlpool — no matter how much information comes in, it all converges into one clear conclusion in your mind.",f:"Ni",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:28,sec:'B',zh:"你像一位工程師，遇到問題就自動開始設計解決方案和行動計劃。",en:"You're like an engineer, automatically designing solutions and action plans for problems.",f:"Te",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:29,sec:'B',zh:"對你來說，觸碰、味道、聲音這些感官體驗比抽象的想法更真實。",en:"For you, sensory experiences like touch, taste, and sound feel more real than abstract ideas.",f:"Se",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:30,sec:'B',zh:"你內心有一套很清晰的『對與錯』標準，這套標準不是來自外界，而是你自己發展出來的。",en:"You have a clear inner standard of right and wrong that you developed yourself, not from external sources.",f:"Fi",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:31,sec:'B',zh:"你通常不會同時保留多種可能性，而是幾乎沒有明顯推理過程地，很快收斂成一個你最確信的方向。",en:"You usually don't keep multiple possibilities open — instead, with almost no conscious reasoning process, you quickly converge on one direction you're most certain about.",f:"Ni",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:32,sec:'B',zh:"你特別擅長建立系統和流程，確保事情能有效率地完成。",en:"You're especially good at building systems and processes to ensure efficiency.",f:"Te",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:33,sec:'B',zh:"即使會讓你自己分心或疲累，你還是會自然地去調節人群中的氣氛，讓大家都能感到舒適。",en:"Even when it distracts or exhausts you, you still naturally regulate the group atmosphere so everyone feels comfortable.",f:"Fe",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
{id:34,sec:'B',zh:"你的記憶力特別好，尤其是對生活中的細節——別人穿過什麼、說過什麼話，你都記得。",en:"Your memory is excellent, especially for life details — what people wore, what they said.",f:"Si",lo:{zh:"完全不像我",en:"Not like me at all"},hi:{zh:"非常像我",en:"Very much like me"}},
// === SECTION C (Q35-Q45): Multi-select, 8 options ===
{id:35,sec:'C',zh:"以下哪些事情會讓你感到興奮或滿足？",en:"Which of the following excite or satisfy you?",opts:[
{zh:"發現兩個看似無關的事物之間的隱藏連結",en:"Discovering hidden connections between seemingly unrelated things",f:"Ne"},
{zh:"完成一個複雜計劃的最後一個步驟",en:"Completing the final step of a complex plan",f:"Te"},
{zh:"在音樂、美食或自然中獲得強烈的感官享受",en:"Intense sensory enjoyment from music, food, or nature",f:"Se"},
{zh:"和重要的人進行一場深入的對話",en:"Having a deep conversation with someone important",f:"Fe"},
{zh:"獨自想通了一個困擾你很久的問題",en:"Figuring out a long-standing problem on your own",f:"Ti"},
{zh:"在熟悉的環境中做熟悉的事，感覺一切都在掌控中",en:"Doing familiar things in familiar places, feeling in control",f:"Si"},
{zh:"捍衛了自己內心認為重要的價值",en:"Defending values you hold dear",f:"Fi"},
{zh:"預見到某件事的走向，而且最後被驗證了",en:"Foreseeing how something would unfold, and being proven right",f:"Ni"}]},
{id:36,sec:'C',zh:"以下哪些休閒活動你會主動選擇去做？",en:"Which leisure activities would you actively choose?",opts:[
{zh:"極限運動、戶外冒險、或身體力行的挑戰",en:"Extreme sports, outdoor adventures, physical challenges",f:"Se"},
{zh:"寫日記、自我反思、或閱讀哲學類書籍",en:"Journaling, self-reflection, reading philosophy",f:"Fi"},
{zh:"參加社交活動、組織聚會、或義工服務",en:"Social events, organizing gatherings, volunteering",f:"Fe"},
{zh:"純粹因為好奇而研究一個學科，不為任何目的",en:"Researching a subject purely out of curiosity",f:"Ti"},
{zh:"製作手工藝、整理收藏品、或重溫經典老片",en:"Crafting, organizing collections, rewatching classics",f:"Si"},
{zh:"設定個人目標並追蹤達成進度",en:"Setting personal goals and tracking progress",f:"Te"},
{zh:"探索新的城市、文化或完全陌生的興趣領域",en:"Exploring new cities, cultures, or unknown interests",f:"Ne"},
{zh:"冥想、發呆、或長時間安靜地沉思",en:"Meditating, daydreaming, quiet contemplation",f:"Ni"}]},
{id:37,sec:'C',zh:"以下哪些場景會讓你感到最不自在？",en:"Which scenarios make you most uncomfortable?",opts:[
{zh:"計劃突然被改變，一切都要重新來過",en:"Plans suddenly changed, everything starts over",f:"Si"},
{zh:"整天坐在室內對著螢幕，完全沒有身體活動",en:"Sitting indoors all day with no physical activity",f:"Se"},
{zh:"被困在一個話題裡，不被允許延伸或轉換方向",en:"Being stuck on one topic, not allowed to branch out",f:"Ne"},
{zh:"周圍太吵雜，完全沒辦法安靜地思考",en:"Too noisy to think quietly",f:"Ni"},
{zh:"做了很多事卻看不到具體的成果",en:"Doing lots of work with no visible results",f:"Te"},
{zh:"被要求接受一個你覺得邏輯不通的結論",en:"Being asked to accept an illogical conclusion",f:"Ti"},
{zh:"團隊裡的人彼此有矛盾，氣氛很僵",en:"Team members in conflict, tense atmosphere",f:"Fe"},
{zh:"必須假裝喜歡一個你其實不認同的東西",en:"Having to pretend to like something you disagree with",f:"Fi"}]},
{id:38,sec:'C',zh:"以下哪些類型的書籍或內容最吸引你？",en:"Which types of books or content attract you most?",opts:[
{zh:"冒險故事、旅遊實錄、極限體驗紀實",en:"Adventure stories, travel logs, extreme experiences",f:"Se"},
{zh:"歷史傳記、經典文學、文化傳統",en:"Historical biographies, classic literature, cultural traditions",f:"Si"},
{zh:"科幻小說、奇幻世界、腦洞大開的故事",en:"Sci-fi, fantasy worlds, mind-bending stories",f:"Ne"},
{zh:"哲學思辨、邏輯推理、數學之美",en:"Philosophy, logic, the beauty of mathematics",f:"Ti"},
{zh:"商業管理、效率方法論、專案管理",en:"Business management, productivity methods, project management",f:"Te"},
{zh:"心理學、人際關係、溝通技巧",en:"Psychology, relationships, communication skills",f:"Fe"},
{zh:"詩歌散文、藝術評論、自我探索",en:"Poetry, art criticism, self-exploration",f:"Fi"},
{zh:"趨勢分析、未來預測、戰略思維",en:"Trend analysis, future predictions, strategic thinking",f:"Ni"}]},
{id:39,sec:'C',zh:"在團隊合作中，你通常自然地承擔哪些角色？",en:"In teamwork, which roles do you naturally take on?",opts:[
{zh:"點子製造機——不斷提出新的想法和可能性",en:"Idea generator — constantly proposing new ideas",f:"Ne"},
{zh:"品質把關者——確保每個細節都符合標準",en:"Quality controller — ensuring every detail meets standards",f:"Si"},
{zh:"氣氛營造者——讓每個人都感到被重視",en:"Mood maker — making everyone feel valued",f:"Fe"},
{zh:"執行推動者——制定計劃並確保進度",en:"Execution driver — making plans and ensuring progress",f:"Te"},
{zh:"邏輯審核員——找出方案中的漏洞",en:"Logic auditor — finding flaws in proposals",f:"Ti"},
{zh:"價值守護者——確保團隊不偏離核心理念",en:"Value guardian — keeping team aligned with core principles",f:"Fi"},
{zh:"行動先鋒——率先動手做，帶領大家進入狀態",en:"Action pioneer — first to act, leading others into motion",f:"Se"},
{zh:"策略顧問——預見潛在問題並提供長遠建議",en:"Strategy advisor — foreseeing issues, giving long-term advice",f:"Ni"}]},
{id:40,sec:'C',zh:"以下哪些能力你覺得自己天生就比較擅長？",en:"Which abilities do you feel naturally gifted at?",opts:[
{zh:"快速反應——在緊急狀況中冷靜行動",en:"Quick reflexes — staying calm in emergencies",f:"Se"},
{zh:"鉅細靡遺——記住並重現大量的細節",en:"Meticulous — remembering and reproducing many details",f:"Si"},
{zh:"舉一反三——從一個線索想到十種可能",en:"Lateral thinking — one clue leads to ten possibilities",f:"Ne"},
{zh:"洞察先機——在事情發生前就感知到趨勢",en:"Foresight — sensing trends before they happen",f:"Ni"},
{zh:"條理分明——把混亂的事情組織成清晰的系統",en:"Organized — turning chaos into clear systems",f:"Te"},
{zh:"抽絲剝繭——把複雜問題拆解到最基本的邏輯",en:"Analytical — breaking complex problems to basic logic",f:"Ti"},
{zh:"察言觀色——敏銳地感受到他人的情緒和需求",en:"Empathetic — sensing others' emotions and needs",f:"Fe"},
{zh:"忠於自我——在壓力下依然堅持自己的信念",en:"Authentic — holding your beliefs under pressure",f:"Fi"}]},
{id:41,sec:'C',zh:"以下哪些學習方式最適合你？",en:"Which learning styles suit you best?",opts:[
{zh:"動手實作——做實驗、建模型、實地操作",en:"Hands-on — experiments, models, fieldwork",f:"Se"},
{zh:"按部就班——跟著教材和範例一步步練習",en:"Step-by-step — following textbooks and examples",f:"Si"},
{zh:"腦力激盪——和別人討論、碰撞出新想法",en:"Brainstorming — discussing and sparking new ideas",f:"Ne"},
{zh:"獨立鑽研——自己查資料、建立理解框架",en:"Independent research — building your own framework",f:"Ti"},
{zh:"目標導向——明確知道學這個要用在哪裡",en:"Goal-oriented — knowing exactly what it's for",f:"Te"},
{zh:"直覺理解——不需要太多步驟，忽然就「懂了」",en:"Intuitive — suddenly 'getting it' without many steps",f:"Ni"},
{zh:"群體學習——和同伴一起學，互相支持和鼓勵",en:"Group learning — studying with peers, mutual support",f:"Fe"},
{zh:"意義驅動——只有覺得這件事有價值才有動力學",en:"Meaning-driven — motivated only when it feels valuable",f:"Fi"}]},
{id:42,sec:'C',zh:"以下哪些「超能力」你最希望擁有？",en:"Which 'superpowers' would you most want?",opts:[
{zh:"時間暫停——讓當下的美好瞬間永遠停留",en:"Time freeze — making beautiful moments last forever",f:"Se"},
{zh:"完美記憶——永遠不會忘記任何經歷過的事",en:"Perfect memory — never forgetting anything",f:"Si"},
{zh:"讀心術——感受到每個人內心真正的情緒",en:"Mind reading — sensing everyone's true emotions",f:"Fe"},
{zh:"預知未來——看到事情未來的發展走向",en:"Future sight — seeing how things will unfold",f:"Ni"},
{zh:"平行思維——同時看到一個問題的所有可能解法",en:"Parallel thinking — seeing all possible solutions at once",f:"Ne"},
{zh:"真理之眼——立刻看穿任何事物的內在邏輯",en:"Eye of truth — instantly seeing the inner logic of anything",f:"Ti"},
{zh:"心靈護盾——永遠不會被迫違背自己的信念",en:"Soul shield — never being forced against your beliefs",f:"Fi"},
{zh:"萬能遙控器——按一個鍵就能讓所有事情高效運轉",en:"Universal remote — making everything run efficiently",f:"Te"}]},
{id:43,sec:'C',zh:"旅行時，以下哪些事情對你來說最重要？",en:"When traveling, what matters most to you?",opts:[
{zh:"品嚐當地美食、感受街道氛圍、體驗在地生活",en:"Local food, street atmosphere, authentic experiences",f:"Se"},
{zh:"造訪歷史景點、了解當地文化傳統",en:"Historical sites, local cultural traditions",f:"Si"},
{zh:"沒有固定行程，隨興探索未知的角落",en:"No fixed itinerary, exploring unknown corners",f:"Ne"},
{zh:"旅途中有安靜的時間讓自己沉澱和反思",en:"Quiet time for reflection during the trip",f:"Ni"},
{zh:"行程規劃得當，交通住宿都高效安排",en:"Well-planned itinerary, efficient logistics",f:"Te"},
{zh:"理解當地的社會運作方式和獨特的思維邏輯",en:"Understanding local social systems and thinking patterns",f:"Ti"},
{zh:"和旅伴或當地人建立有意義的連結",en:"Meaningful connections with travel companions or locals",f:"Fe"},
{zh:"這趟旅行對你個人有某種特殊的意義",en:"The trip holds special personal meaning",f:"Fi"}]},
{id:44,sec:'C',zh:"以下哪些情境會讓你進入「心流」狀態——完全沉浸、忘記時間？",en:"Which situations put you in a 'flow state' — completely immersed, losing track of time?",opts:[
{zh:"進行一場激烈的運動或競技",en:"Intense sports or competition",f:"Se"},
{zh:"按照一套精確的流程完成一件精細的作品",en:"Following precise steps to complete detailed work",f:"Si"},
{zh:"快速地在多個想法之間跳躍和連結",en:"Rapidly jumping between and connecting multiple ideas",f:"Ne"},
{zh:"安靜地追蹤一個問題直到看到最深層的答案",en:"Quietly tracking a problem to its deepest answer",f:"Ni"},
{zh:"推進一個項目從規劃到完成的全過程",en:"Driving a project from planning to completion",f:"Te"},
{zh:"拆解一個複雜系統，搞清楚每一層的運作原理",en:"Deconstructing a complex system layer by layer",f:"Ti"},
{zh:"和一群人熱烈地交流想法和感受",en:"Passionately exchanging ideas and feelings with a group",f:"Fe"},
{zh:"創作一件完全表達你內心世界的作品",en:"Creating something that fully expresses your inner world",f:"Fi"}]},
{id:45,sec:'C',zh:"如果用一種自然現象來形容你的思維方式，以下哪些最像你？",en:"If a natural phenomenon described your thinking, which fits you best?",opts:[
{zh:"瀑布——能量集中、一瀉千里、充滿行動力",en:"Waterfall — concentrated energy, powerful action",f:"Se"},
{zh:"地層——一層一層疊加，穩固而有跡可循",en:"Geological layers — steady accumulation, traceable",f:"Si"},
{zh:"閃電——突然劈開天際，照亮一瞬間的全貌",en:"Lightning — suddenly illuminating the whole picture",f:"Ni"},
{zh:"蒲公英——種子飛向四面八方，在不同的地方生根",en:"Dandelion — seeds flying everywhere, taking root",f:"Ne"},
{zh:"齒輪組——環環相扣、精密咬合、高效運轉",en:"Gears — interlocking, precise, efficient",f:"Te"},
{zh:"顯微鏡——層層深入，不放過任何微小的邏輯",en:"Microscope — zooming in, missing no detail",f:"Ti"},
{zh:"潮汐——隨著周圍的引力起伏，與環境共振",en:"Tides — rising and falling with surrounding forces",f:"Fe"},
{zh:"北極星——不管環境怎麼變，始終指向同一個方向",en:"North Star — always pointing the same direction",f:"Fi"}]},
// === SECTION D (Q46-Q55): Forced-choice binary, +4 each (Q55 composite +2/+2) ===
{id:46,sec:'D',zh:"你第一次到一個完全陌生的夜市，你更可能？",en:"You're at a night market for the first time. You're more likely to...",pair:['Se','Ne'],opts:[
{zh:"被某個攤位飄來的香味吸引，走過去看看是什麼、嚐嚐味道",en:"Be drawn by a scent drifting from a stall, walking over to see what it is and taste it",f:"Se"},
{zh:"快速掃過整排攤位，腦中開始想「這個攤位如果搬到那邊生意會更好」之類的念頭",en:"Quickly scan the row of stalls, thinking 'this stall would do better business if it moved over there'",f:"Ne"}]},
{id:47,sec:'D',zh:"朋友突然帶你去一間你完全沒聽過的餐廳，菜單全是你沒見過的料理。你？",en:"A friend takes you to a totally unknown restaurant with unfamiliar dishes. You...",pair:['Ne','Se'],opts:[
{zh:"挑一道名字最奇怪的，想看看到底是什麼東西",en:"Pick the dish with the weirdest name, wanting to see what it actually is",f:"Ne"},
{zh:"先問服務生哪道最受歡迎，然後專注品嚐它的味道和口感",en:"Ask the server which dish is most popular, then focus on tasting its flavor and texture",f:"Se"}]},
{id:48,sec:'D',zh:"你組裝一個新買的家具，說明書寫得很爛。你會？",en:"You're assembling furniture with terrible instructions. You...",pair:['Ti','Te'],opts:[
{zh:"丟掉說明書，自己看零件的形狀和接口，在腦中推理出組裝順序",en:"Toss the manual, examine the parts' shapes and connectors, and mentally deduce the assembly order",f:"Ti"},
{zh:"上網找這個型號的組裝影片，按照最多人推薦的步驟來做",en:"Search online for assembly videos of this model and follow the most recommended steps",f:"Te"}]},
{id:49,sec:'D',zh:"你走進一間很有氣氛的老咖啡廳，坐下之後你腦中浮現的是？",en:"You sit down in an atmospheric old cafe. What comes to mind?",pair:['Ni','Si'],opts:[
{zh:"這間店以前一定經歷了很多故事，你開始想像它十年後會變成什麼樣子",en:"This place must have seen many stories; you start imagining what it'll look like in ten years",f:"Ni"},
{zh:"這裡的木頭桌面和燈光讓你想起小時候常去的某個地方",en:"The wooden tabletop and lighting remind you of a place you often went as a child",f:"Si"}]},
{id:50,sec:'D',zh:"你的好朋友在背後說了另一個朋友的壞話，而你覺得那些話不公平。你？",en:"Your close friend badmouths another friend behind their back, and you think it's unfair. You...",pair:['Fi','Fe'],opts:[
{zh:"內心很不舒服，因為這件事違反了你對「朋友」的定義",en:"Feel deeply uncomfortable because this violates your definition of 'friendship'",f:"Fi"},
{zh:"擔心如果被那個人知道了會破壞整個朋友圈的關係",en:"Worry that if the other person finds out, it will damage the whole friend group's dynamics",f:"Fe"}]},
{id:51,sec:'D',zh:"你在洗澡時突然冒出一個好點子，這個點子更像？",en:"An idea hits you in the shower. It's more like...",pair:['Ni','Ne'],opts:[
{zh:"一個畫面或感覺，很模糊但你很確定它是對的，只是還說不清楚",en:"A picture or feeling, vague but you're certain it's right — you just can't articulate it yet",f:"Ni"},
{zh:"好幾個想法同時炸開，你興奮地想把它們全部串在一起",en:"Several ideas exploding at once, and you're excited to string them all together",f:"Ne"}]},
{id:52,sec:'D',zh:"你看了一部紀錄片，主角做了一個很有爭議的決定。看完之後你？",en:"After watching a documentary where the subject made a controversial decision, you...",pair:['Ti','Fi'],opts:[
{zh:"不自覺地開始分析他的決策邏輯——前提是什麼、推論過程有沒有問題",en:"Unconsciously start analyzing the decision logic — what were the premises, was the reasoning flawed",f:"Ti"},
{zh:"心裡對這個人產生了一個很明確的感覺——你佩服他，或者你覺得他不對",en:"Develop a clear feeling about this person — you admire them, or you feel they were wrong",f:"Fi"}]},
{id:53,sec:'D',zh:"你回到一個三年沒去的公園散步，你更容易？",en:"Revisiting a park you haven't been to in three years, you more naturally...",pair:['Si','Se'],opts:[
{zh:"注意到「這棵樹好像變大了」「那個鞦韆以前不是這個顏色」——和記憶對比",en:"Notice 'this tree seems bigger' and 'that swing wasn't this color' — comparing with memory",f:"Si"},
{zh:"專注在腳下草地的觸感、風的溫度、和遠處小孩笑聲帶來的整體感受",en:"Focus on the grass underfoot, the temperature of the wind, and the overall feeling from distant children's laughter",f:"Se"}]},
{id:54,sec:'D',zh:"你們小組報告明天要交，但有一個組員一直沒完成他的部分。你？",en:"Your group project is due tomorrow but one member hasn't finished their part. You...",pair:['Te','Fe'],opts:[
{zh:"直接跟他說：「你今晚必須交，不然我先幫你寫，但之後要講清楚。」",en:"Tell them directly: 'You must submit tonight, or I'll write it for you, but we need to talk about it afterward.'",f:"Te"},
{zh:"先私下問他是不是遇到什麼困難，看能不能幫他分擔一些",en:"Privately ask if they're having difficulties and see if you can share some of the burden",f:"Fe"}]},
{id:55,sec:'D',zh:"你拿到一個你從沒見過的電子裝置，沒有說明書。你？",en:"You get an unknown electronic device with no manual. You...",pair:['Ti-Se','Ti-Ne'],composite:true,opts:[
{zh:"開始按各種按鈕，觀察每個操作會產生什麼反應，從實際回饋中搞懂它",en:"Start pressing buttons, observing what each action produces, figuring it out from real-time feedback",f:"Ti-Se",fs:['Se','Ti']},
{zh:"盯著它看了一會兒，腦中開始推測「這個接口可能是...那這個按鈕應該是...」不急著動手",en:"Stare at it for a while, mentally speculating 'this port might be... so this button should be...' — no rush to touch it",f:"Ti-Ne",fs:['Ne','Ti']}]}
];
// placeholder: TYPE_STACKS
const typeStacks = {
  INTJ:['Ni','Te','Fi','Se'], INTP:['Ti','Ne','Si','Fe'],
  ENTJ:['Te','Ni','Se','Fi'], ENTP:['Ne','Ti','Fe','Si'],
  INFJ:['Ni','Fe','Ti','Se'], INFP:['Fi','Ne','Si','Te'],
  ENFJ:['Fe','Ni','Se','Ti'], ENFP:['Ne','Fi','Te','Si'],
  ISTJ:['Si','Te','Fi','Ne'], ISTP:['Ti','Se','Ni','Fe'],
  ESTJ:['Te','Si','Ne','Fi'], ESTP:['Se','Ti','Fe','Ni'],
  ISFJ:['Si','Fe','Ti','Ne'], ISFP:['Fi','Se','Ni','Te'],
  ESFJ:['Fe','Si','Ne','Ti'], ESFP:['Se','Fi','Te','Ni']
};

// placeholder: TYPE_DESCRIPTIONS
const typeDescs = {
INTJ:{name:{zh:"策略家",en:"The Strategist"},desc:{zh:"擁有強大的內傾直覺，擅長洞察本質與預見未來。思維深邃，善於建構長遠藍圖，並用系統性方法將願景化為現實。獨立自主，追求效率與深度。",en:"Powerful introverted intuition for seeing essence and future. Deep thinker who builds long-term visions and systematically makes them reality. Independent, pursuing efficiency and depth."}},
INTP:{name:{zh:"邏輯家",en:"The Logician"},desc:{zh:"追求內在邏輯的完美自洽，熱愛拆解複雜問題到最基本的原理。思維獨立，不受外界標準束縛，享受在抽象世界中探索真理。",en:"Pursues perfect internal logical consistency, loves deconstructing complex problems. Independent thinker exploring truth in abstract worlds."}},
ENTJ:{name:{zh:"指揮官",en:"The Commander"},desc:{zh:"天生的領導者，擅長制定戰略並推動執行。結合直覺洞察與高效行動力，善於組織資源、設定目標並帶領團隊達成願景。",en:"Natural leader skilled at strategy and execution. Combines intuitive insight with efficient action, organizing resources to achieve visions."}},
ENTP:{name:{zh:"辯論家",en:"The Debater"},desc:{zh:"思維敏捷的創新者，擅長從多角度看待問題並挑戰既有觀念。充滿好奇心，喜歡探索各種可能性，在智識交鋒中獲得能量。",en:"Quick-minded innovator who challenges conventions from multiple angles. Curious explorer of possibilities, energized by intellectual sparring."}},
INFJ:{name:{zh:"提倡者",en:"The Advocate"},desc:{zh:"擁有深刻的洞察力和強烈的理想主義。能看穿表象直達本質，同時深切關懷他人。內心有堅定的願景，致力於讓世界變得更好。",en:"Deep insight combined with strong idealism. Sees through surfaces to essence while deeply caring for others. Committed to making the world better."}},
INFP:{name:{zh:"調停者",en:"The Mediator"},desc:{zh:"內心世界豐富而深邃，擁有強烈的個人價值觀和真誠的情感。追求意義和真實，善於透過創意表達內在世界，對不公義有敏銳的感知。",en:"Rich inner world with strong personal values and authentic emotions. Pursues meaning and truth, expresses inner world through creativity."}},
ENFJ:{name:{zh:"主人公",en:"The Protagonist"},desc:{zh:"天生的激勵者，擅長理解他人需求並凝聚團隊力量。結合直覺洞察與人際智慧，能看到每個人的潛力並幫助他們成長。",en:"Natural motivator who understands others' needs and unites teams. Combines intuition with social intelligence to help people grow."}},
ENFP:{name:{zh:"競選者",en:"The Campaigner"},desc:{zh:"充滿熱情的探索者，在人與想法之間建立連結。擁有豐富的想像力和感染力，善於發現可能性並激發他人的熱情。",en:"Passionate explorer connecting people and ideas. Rich imagination and infectious enthusiasm for discovering possibilities and inspiring others."}},
ISTJ:{name:{zh:"物流師",en:"The Logistician"},desc:{zh:"可靠而務實的執行者，重視傳統、規則和責任。擁有出色的記憶力和注意力，善於建立並維護標準化流程，確保事情井然有序。",en:"Reliable, practical executor who values tradition, rules, and duty. Excellent memory and attention to detail, maintaining orderly processes."}},
ISTP:{name:{zh:"鑑賞家",en:"The Virtuoso"},desc:{zh:"冷靜的分析者與靈活的實踐者。擅長理解系統運作原理，喜歡動手解決問題。獨立自主，在需要時能迅速而精準地行動。",en:"Cool analyst and flexible practitioner. Understands how systems work, enjoys hands-on problem solving. Acts swiftly and precisely when needed."}},
ESTJ:{name:{zh:"總經理",en:"The Executive"},desc:{zh:"果斷的組織者和管理者，重視效率、秩序和明確的規則。善於制定計劃並確保執行，以事實和數據為決策依據，追求具體成果。",en:"Decisive organizer valuing efficiency, order, and clear rules. Plans and ensures execution based on facts and data, pursuing concrete results."}},
ESTP:{name:{zh:"企業家",en:"The Entrepreneur"},desc:{zh:"充滿活力的行動派，善於在當下捕捉機會並快速做出反應。務實而靈活，喜歡解決眼前的實際問題，在挑戰中獲得樂趣。",en:"Energetic action-taker who seizes opportunities and reacts quickly. Practical and flexible, enjoys solving immediate problems."}},
ISFJ:{name:{zh:"守護者",en:"The Defender"},desc:{zh:"溫暖而盡責的守護者，默默關注他人的需求。擁有出色的記憶力，重視和諧與穩定，用細心和耐心維護身邊人的幸福。",en:"Warm, dutiful guardian quietly attending to others' needs. Excellent memory, values harmony and stability, caring for loved ones with patience."}},
ISFP:{name:{zh:"探險家",en:"The Adventurer"},desc:{zh:"安靜而敏感的藝術家，透過感官和內在價值觀體驗世界。追求真實和美感，喜歡用自己的方式表達獨特的內在世界。",en:"Quiet, sensitive artist experiencing the world through senses and inner values. Pursues authenticity and beauty, expressing a unique inner world."}},
ESFJ:{name:{zh:"執政官",en:"The Consul"},desc:{zh:"熱心而善於社交的照顧者，重視人際和諧與群體歸屬。善於察覺他人需求，樂於組織活動和維繫關係，創造溫暖的社交環境。",en:"Warm, social caretaker valuing interpersonal harmony and belonging. Skilled at sensing needs, organizing events, creating warm social environments."}},
ESFP:{name:{zh:"表演者",en:"The Entertainer"},desc:{zh:"活力四射的表演者，熱愛生活中的每一個精彩瞬間。善於營造歡樂氛圍，用熱情和幽默感染身邊的人，活在當下並享受體驗。",en:"Vibrant performer who loves every exciting moment. Creates joyful atmospheres with warmth and humor, living in and enjoying the present."}}
};

// Detailed type descriptions for result page
const typeDetailDescs = {
INTJ:{zh:"你的思維由內傾直覺（Ni）主導，擅長從紛雜的資訊中提煉出本質性的洞見，並透過外傾思考（Te）將其轉化為可執行的策略。你內心有一套堅定但不輕易外露的價值體系（Fi），驅動著你追求有意義的目標。你的感官體驗（Se）是相對較少關注的面向，可能在壓力下忽略身體訊號或當下細節。你適合需要長遠規劃、獨立研究與系統設計的環境，決策風格是先看見終點、再反推路徑。",en:"Your thinking is led by Introverted Intuition (Ni), excelling at distilling essential insights from complex information, then transforming them into executable strategies via Extraverted Thinking (Te). You hold a firm but private value system (Fi) that drives you toward meaningful goals. Extraverted Sensing (Se) is your less-attended dimension — you may overlook physical signals or present-moment details under pressure. You thrive in environments requiring long-term planning, independent research, and systems design. Your decision style: envision the endpoint first, then reverse-engineer the path."},
INTP:{zh:"你的核心驅動力是內傾思考（Ti），追求邏輯的自洽與深層原理的理解。外傾直覺（Ne）作為你的輔助功能，讓你能從一個概念延伸出無數可能性，享受思維的自由探索。你的內傾感覺（Si）提供過往經驗的參照，而外傾情感（Fe）是你較不自覺的面向，有時會忽略社交氛圍或他人的情感需求。你適合需要深度分析、理論建構與自主探索的環境，決策風格是由內而外、先理解原理再行動。",en:"Your core drive is Introverted Thinking (Ti), pursuing logical consistency and deep understanding of principles. Extraverted Intuition (Ne) as your auxiliary lets you branch one concept into countless possibilities, enjoying free intellectual exploration. Introverted Sensing (Si) provides experiential reference, while Extraverted Feeling (Fe) is your less conscious dimension — sometimes overlooking social atmosphere or others' emotional needs. You thrive in environments for deep analysis, theory-building, and autonomous exploration. Your decision style: understand the principles first, then act."},
ENTJ:{zh:"你以外傾思考（Te）主導，天生具備組織與執行的能力，善於制定計劃並推動團隊達成目標。內傾直覺（Ni）為你提供戰略性的遠見，讓你能預判趨勢並做出前瞻性決策。外傾感覺（Se）讓你在行動中保持靈活與果斷。你較少觸及的內傾情感（Fi）可能讓你在面對個人價值衝突時感到不確定。你適合領導角色與需要果斷決策的環境，決策風格是目標導向、快速執行。",en:"Led by Extraverted Thinking (Te), you naturally organize, plan, and drive teams toward goals. Introverted Intuition (Ni) provides strategic foresight for anticipating trends and making forward-looking decisions. Extraverted Sensing (Se) keeps you agile and decisive in action. Your less-developed Introverted Feeling (Fi) may leave you uncertain when facing personal value conflicts. You thrive in leadership roles and decisive environments. Your decision style: goal-oriented, rapid execution."},
ENTP:{zh:"你的思維以外傾直覺（Ne）驅動，對世界充滿好奇，善於在看似無關的事物之間發現隱藏連結。內傾思考（Ti）讓你擁有精確的邏輯分析能力，能快速拆解複雜問題。外傾情感（Fe）使你在社交中具有感染力和說服力。你較不擅長的內傾感覺（Si）可能讓你忽略細節或對例行事務缺乏耐心。你適合需要創新思維、腦力激盪與多元挑戰的環境，決策風格是先發散探索、再收斂聚焦。",en:"Driven by Extraverted Intuition (Ne), you're endlessly curious, skilled at finding hidden connections between seemingly unrelated things. Introverted Thinking (Ti) gives you precise analytical abilities to quickly deconstruct complex problems. Extraverted Feeling (Fe) makes you persuasive and charismatic socially. Your weaker Introverted Sensing (Si) may cause you to overlook details or lose patience with routine. You thrive in environments requiring innovation, brainstorming, and diverse challenges. Your decision style: diverge first, then converge."},
INFJ:{zh:"你以內傾直覺（Ni）為核心，能洞察事物表象之下的深層意義與未來走向。外傾情感（Fe）讓你深切關懷他人福祉，自然而然地成為理解者與支持者。內傾思考（Ti）為你的洞察提供邏輯架構，讓你的判斷不僅基於直覺也有理性支撐。外傾感覺（Se）是你較少發展的面向，可能在高壓下才會突然顯現。你適合需要願景驅動、人文關懷與深度思考的環境，決策風格是以遠見結合同理心。",en:"Centered on Introverted Intuition (Ni), you perceive deep meaning and future trajectories beneath the surface. Extraverted Feeling (Fe) drives your genuine care for others' wellbeing, naturally making you an empathetic supporter. Introverted Thinking (Ti) provides logical structure for your insights. Extraverted Sensing (Se) is your less-developed side, possibly emerging only under pressure. You thrive in vision-driven, humanistic, deeply thoughtful environments. Your decision style: combine foresight with empathy."},
INFP:{zh:"你的世界以內傾情感（Fi）為中心，擁有深刻且獨特的個人價值體系，對真實與意義有著近乎本能的追求。外傾直覺（Ne）讓你富有想像力，能看見事物的多元可能性並透過創意表達內在世界。內傾感覺（Si）為你保存豐富的情感記憶，而外傾思考（Te）是你較少發展的面向，可能在需要系統化執行時感到挑戰。你適合有創意空間、允許自我表達且具有意義感的環境，決策風格是價值驅動、忠於內心。",en:"Your world centers on Introverted Feeling (Fi), with a profound and unique personal value system and an instinctive pursuit of authenticity and meaning. Extraverted Intuition (Ne) fuels your imagination, letting you see diverse possibilities and express your inner world creatively. Introverted Sensing (Si) preserves rich emotional memories, while Extraverted Thinking (Te) is less developed — systematic execution can feel challenging. You thrive in creative, self-expressive, meaningful environments. Your decision style: value-driven, true to your heart."},
ENFJ:{zh:"你以外傾情感（Fe）為主導，天生擁有理解和激勵他人的能力，善於營造和諧的團體氛圍。內傾直覺（Ni）為你提供對人性與趨勢的洞察力，讓你能預見他人的需求並提供引導。外傾感覺（Se）讓你在互動中保持活力和感染力。你較少發展的內傾思考（Ti）可能讓你在需要冷靜邏輯分析時感到不自在。你適合需要溝通協調、團隊建設與人才發展的環境，決策風格是以人為本、願景引導。",en:"Led by Extraverted Feeling (Fe), you naturally understand and inspire others, creating harmonious group atmospheres. Introverted Intuition (Ni) provides insight into human nature and trends, helping you anticipate needs and offer guidance. Extraverted Sensing (Se) keeps your interactions lively and engaging. Your less-developed Introverted Thinking (Ti) may make cold logical analysis uncomfortable. You thrive in communication, team-building, and people development environments. Your decision style: people-first, vision-guided."},
ENFP:{zh:"你以外傾直覺（Ne）驅動，對世界充滿熱情，善於在人、想法與可能性之間建立充滿活力的連結。內傾情感（Fi）讓你擁有深刻的自我覺察和堅定的個人價值觀，使你的探索始終帶有溫度。外傾思考（Te）幫助你將想法轉化為行動。你較少關注的內傾感覺（Si）可能讓你忽略細節與例行事務。你適合需要創造力、靈活性和人際互動的環境，決策風格是熱情探索、直覺導航。",en:"Driven by Extraverted Intuition (Ne), you're passionate about the world, skillfully building vibrant connections between people, ideas, and possibilities. Introverted Feeling (Fi) gives you deep self-awareness and firm personal values, keeping your exploration warm. Extraverted Thinking (Te) helps convert ideas to action. Your less-attended Introverted Sensing (Si) may cause you to overlook details and routine. You thrive in creative, flexible, interpersonal environments. Your decision style: passionate exploration, intuitive navigation."},
ISTJ:{zh:"你以內傾感覺（Si）為核心，擁有出色的記憶力和對細節的敏銳觀察力，重視經驗傳承與可靠的方法。外傾思考（Te）讓你善於建立系統化流程，確保事情按計劃推進。內傾情感（Fi）在你內心保持著一份低調但堅定的價值觀。你較少使用的外傾直覺（Ne）可能讓你在面對未知或需要發散思維時感到不確定。你適合需要精確執行、品質把控和穩定性的環境，決策風格是基於事實與經驗的穩健判斷。",en:"Centered on Introverted Sensing (Si), you have excellent memory and keen attention to detail, valuing experience and reliable methods. Extraverted Thinking (Te) helps you build systematic processes ensuring plans stay on track. Introverted Feeling (Fi) maintains quiet but firm values within. Your less-used Extraverted Intuition (Ne) may make the unknown or divergent thinking uncomfortable. You thrive in environments requiring precision, quality control, and stability. Your decision style: steady judgment based on facts and experience."},
ISTP:{zh:"你以內傾思考（Ti）為核心，擅長理解事物運作的內在邏輯與機制，喜歡獨立分析和解決問題。外傾感覺（Se）讓你對環境有敏銳的感知力，能在實際操作中展現精準的技巧。內傾直覺（Ni）為你提供偶爾閃現的洞見。你較少發展的外傾情感（Fe）可能讓你在需要表達情感或處理人際關係時顯得較為疏離。你適合需要技術分析、實際操作與獨立作業的環境，決策風格是冷靜觀察、精準行動。",en:"Centered on Introverted Thinking (Ti), you excel at understanding internal logic and mechanisms, enjoying independent analysis and problem-solving. Extraverted Sensing (Se) gives you sharp environmental awareness and precise hands-on skills. Introverted Intuition (Ni) provides occasional flashes of insight. Your less-developed Extraverted Feeling (Fe) may make you seem detached when expressing emotions or handling relationships. You thrive in technical analysis, hands-on work, and independent environments. Your decision style: calm observation, precise action."},
ESTJ:{zh:"你以外傾思考（Te）主導，天生擅長組織、管理和推動事情達成。內傾感覺（Si）為你提供豐富的經驗參照，讓你重視既有的規範和已驗證的方法。外傾直覺（Ne）讓你在需要時也能看到一些新的可能性。你較少觸及的內傾情感（Fi）可能讓你在面對個人價值觀議題時需要更多時間去感受和理解。你適合需要明確目標、清晰流程和執行力的環境，決策風格是以事實為據、效率優先。",en:"Led by Extraverted Thinking (Te), you naturally organize, manage, and drive results. Introverted Sensing (Si) provides rich experiential references, making you value established norms and proven methods. Extraverted Intuition (Ne) lets you see new possibilities when needed. Your less-touched Introverted Feeling (Fi) may require more time for personal value issues. You thrive in environments with clear goals, processes, and execution demands. Your decision style: fact-based, efficiency-first."},
ESTP:{zh:"你以外傾感覺（Se）驅動，擅長在當下捕捉機會，對環境變化有極高的敏感度和快速反應力。內傾思考（Ti）讓你具備冷靜的分析能力，能在行動中做出精準判斷。外傾情感（Fe）使你在社交場合具有魅力和親和力。你較少發展的內傾直覺（Ni）可能讓你在需要長遠規劃或深層反思時缺乏耐心。你適合需要即時反應、靈活應變與實際行動的環境，決策風格是快速評估、果斷出手。",en:"Driven by Extraverted Sensing (Se), you excel at seizing opportunities in the moment with high sensitivity and quick reflexes. Introverted Thinking (Ti) provides calm analytical ability for precise in-action judgments. Extraverted Feeling (Fe) gives you social charm and approachability. Your less-developed Introverted Intuition (Ni) may make long-term planning or deep reflection feel impatient. You thrive in environments requiring quick reactions, adaptability, and practical action. Your decision style: rapid assessment, decisive action."},
ISFJ:{zh:"你以內傾感覺（Si）為核心，擁有細膩的觀察力和深厚的記憶，對過往的經歷和承諾保持忠誠。外傾情感（Fe）讓你天生關心他人的感受，總是默默付出以維護周圍的和諧。內傾思考（Ti）為你提供實務上的判斷力。你較少使用的外傾直覺（Ne）可能讓你在面對新變化時需要較多的適應時間。你適合需要耐心、細心和人際關懷的環境，決策風格是基於經驗與對他人福祉的考量。",en:"Centered on Introverted Sensing (Si), you have refined observational skills and deep memory, staying loyal to past experiences and commitments. Extraverted Feeling (Fe) makes you naturally attentive to others' feelings, quietly giving to maintain harmony. Introverted Thinking (Ti) provides practical judgment. Your less-used Extraverted Intuition (Ne) may mean you need more time adapting to new changes. You thrive in environments requiring patience, care, and interpersonal warmth. Your decision style: based on experience and concern for others' wellbeing."},
ISFP:{zh:"你以內傾情感（Fi）為核心，擁有敏銳而深刻的價值感知力，對美和真實有著天然的直覺。外傾感覺（Se）讓你對環境中的感官體驗高度敏感，善於透過實際行動和藝術創作來表達自我。內傾直覺（Ni）為你提供偶爾浮現的深層洞察。你較少發展的外傾思考（Te）可能讓你在需要系統化規劃時感到不自在。你適合有美感追求、允許自由表達和個人節奏的環境，決策風格是跟隨內心感受與當下體驗。",en:"Centered on Introverted Feeling (Fi), you have keen and profound value perception with a natural intuition for beauty and authenticity. Extraverted Sensing (Se) makes you highly sensitive to sensory experiences, expressing yourself through action and artistic creation. Introverted Intuition (Ni) provides occasional deep insights. Your less-developed Extraverted Thinking (Te) may make systematic planning uncomfortable. You thrive in environments with aesthetic pursuit, free expression, and personal rhythm. Your decision style: follow inner feelings and present experience."},
ESFJ:{zh:"你以外傾情感（Fe）主導，天生擅長感知與照顧他人的情感需求，善於創造溫暖和諧的社交氛圍。內傾感覺（Si）讓你重視傳統、記憶和已建立的連結，對生活細節有極高的關注力。外傾直覺（Ne）讓你在需要時也能看到新的可能性。你較少觸及的內傾思考（Ti）可能讓你在需要抽離情感進行邏輯分析時感到困難。你適合需要人際協調、社群維護和組織活動的環境，決策風格是以人為本、重視和諧。",en:"Led by Extraverted Feeling (Fe), you naturally sense and care for others' emotional needs, creating warm, harmonious social atmospheres. Introverted Sensing (Si) makes you value tradition, memories, and established connections with keen attention to life details. Extraverted Intuition (Ne) lets you see new possibilities when needed. Your less-touched Introverted Thinking (Ti) may make detaching emotions for logical analysis difficult. You thrive in interpersonal coordination, community, and event organization environments. Your decision style: people-first, harmony-oriented."},
ESFP:{zh:"你以外傾感覺（Se）驅動，擁有對當下的高度感知力和享受生活的能力，善於營造歡樂的氛圍。內傾情感（Fi）讓你在熱情外表下擁有真誠而深刻的個人價值觀，知道什麼對自己真正重要。外傾思考（Te）幫助你在需要時展現行動力。你較少發展的內傾直覺（Ni）可能讓你在需要長遠規劃或深層反思時感到不自在。你適合需要活力、互動和即時體驗的環境，決策風格是活在當下、跟隨內心。",en:"Driven by Extraverted Sensing (Se), you have high present-moment awareness and a gift for enjoying life, creating joyful atmospheres. Introverted Feeling (Fi) gives you sincere, deep personal values beneath your enthusiastic exterior — you know what truly matters. Extraverted Thinking (Te) helps you take action when needed. Your less-developed Introverted Intuition (Ni) may make long-term planning or deep reflection uncomfortable. You thrive in energetic, interactive, experiential environments. Your decision style: live in the moment, follow your heart."}
};

const funcNames = ['Se','Si','Ne','Ni','Te','Ti','Fe','Fi'];

// Polyfill for CanvasRenderingContext2D.roundRect
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
    if (w < 0) return; if (h < 0) return;
    r = Math.min(r, w / 2, h / 2);
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
  };
}
const funcColors = {Se:'#EF4444',Si:'#F97316',Ne:'#EAB308',Ni:'#22C55E',Te:'#3B82F6',Ti:'#8B5CF6',Fe:'#EC4899',Fi:'#14B8A6'};
const sectionNames = {A:{zh:'情境選擇',en:'Scenario Choice'},B:{zh:'自我評估',en:'Self Assessment'},C:{zh:'多重選擇',en:'Multiple Choice'},D:{zh:'二選一',en:'Forced Choice'}};

// ==================== STATE ====================
const state = {
  lang: 'zh',
  dark: false,
  page: 'landing', // landing | quiz | results
  currentQ: 0,
  answers: {},
  scores: null,
  resultType: null,
  similarities: null
};

// ==================== SCORING ====================
// placeholder: SCORING_FUNCTIONS
function calculateScores() {
  const raw = {Se:0,Si:0,Ne:0,Ni:0,Te:0,Ti:0,Fe:0,Fi:0};
  const counts = {Se:0,Si:0,Ne:0,Ni:0,Te:0,Ti:0,Fe:0,Fi:0};

  questions.forEach((q, idx) => {
    const ans = state.answers[idx];
    if (ans === undefined || ans === null) return;
    if (q.sec === 'A') {
      const opt = q.opts[ans];
      if (opt) { raw[opt.f] += 3; counts[opt.f]++; }
    } else if (q.sec === 'B') {
      raw[q.f] += ans;
      counts[q.f]++;
    } else if (q.sec === 'C') {
      if (Array.isArray(ans)) {
        ans.forEach(i => {
          const opt = q.opts[i];
          if (opt) { raw[opt.f] += 2; counts[opt.f]++; }
        });
      }
    } else if (q.sec === 'D') {
      const opt = q.opts[ans];
      if (opt) {
        if (q.composite && opt.fs) {
          opt.fs.forEach(f => { raw[f] += 2; counts[f]++; });
        } else {
          raw[opt.f] += 4; counts[opt.f]++;
        }
      }
    }
  });

  // Normalize to 0-100
  const maxPossible = {};
  funcNames.forEach(f => {
    let max = 0;
    questions.forEach(q => {
      if (q.sec === 'A') {
        q.opts.forEach(o => { if (o.f === f) max += 3; });
      } else if (q.sec === 'B') {
        if (q.f === f) max += 7;
      } else if (q.sec === 'C') {
        q.opts.forEach(o => { if (o.f === f) max += 2; });
      } else if (q.sec === 'D') {
        q.opts.forEach(o => {
          if (q.composite && o.fs) { if (o.fs.includes(f)) max += 2; }
          else { if (o.f === f) max += 4; }
        });
      }
    });
    maxPossible[f] = max || 1;
  });

  const scores = {};
  funcNames.forEach(f => {
    scores[f] = Math.round((raw[f] / maxPossible[f]) * 100);
  });
  return scores;
}

function normalizeVector(scores) {
  const vals = funcNames.map(f => scores[f]);
  const max = Math.max(...vals, 1);
  const norm = {};
  funcNames.forEach(f => { norm[f] = scores[f] / max; });
  return norm;
}

function cosineSimilarity(a, b) {
  let dot = 0, magA = 0, magB = 0;
  funcNames.forEach(f => {
    dot += (a[f] || 0) * (b[f] || 0);
    magA += (a[f] || 0) ** 2;
    magB += (b[f] || 0) ** 2;
  });
  magA = Math.sqrt(magA);
  magB = Math.sqrt(magB);
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

function determineType(scores) {
  const norm = normalizeVector(scores);
  const weights = [1.0, 0.75, 0.5, 0.25];
  const sims = {};

  Object.keys(typeStacks).forEach(type => {
    const stack = typeStacks[type];
    const ideal = {};
    funcNames.forEach(f => { ideal[f] = 0; });
    stack.forEach((f, i) => { ideal[f] = weights[i]; });
    sims[type] = cosineSimilarity(norm, ideal);
  });

  // Find best match
  let bestType = 'INTJ', bestSim = -1;
  Object.keys(sims).forEach(type => {
    if (sims[type] > bestSim) { bestSim = sims[type]; bestType = type; }
  });

  // Convert to percentages (relative to best)
  const maxSim = bestSim || 1;
  const pcts = {};
  Object.keys(sims).forEach(type => {
    pcts[type] = Math.round((sims[type] / maxSim) * 100);
  });

  return { type: bestType, similarities: pcts };
}

// ==================== RENDERING ====================
// placeholder: RENDER_FUNCTIONS
const $ = id => document.getElementById(id);
const app = () => document.getElementById('app');
const t = (obj) => obj[state.lang] || obj.zh;

function render() {
  if (state.page === 'landing') renderLanding();
  else if (state.page === 'quiz') renderQuiz();
  else if (state.page === 'results') renderResults();
}

function renderTopBar() {
  return `<div class="top-bar">
    <button class="top-btn" onclick="toggleLang()">${state.lang === 'zh' ? 'EN' : '繁中'}</button>
    <button class="top-btn" onclick="toggleTheme()">${state.dark ? '☀' : '☾'}</button>
  </div>`;
}

function renderLanding() {
  app().innerHTML = renderTopBar() + `
  <div class="landing">
    <img class="landing-logo" src="images/main.png" alt="INER">
    <h1>${state.lang === 'zh' ? '16型MBTI測驗' : '16 Types MBTI Quiz'}</h1>
    <p class="subtitle">${state.lang === 'zh'
      ? '透過 55 道情境與認知功能題，探索你的八維認知功能'
      : 'Explore your cognitive functions through 55 scenario-based questions'}</p>
    <button class="start-btn" onclick="startQuiz()">${state.lang === 'zh' ? '開始測驗' : 'Start Quiz'}</button>
  </div>`;
}

function renderQuiz() {
  const q = questions[state.currentQ];
  const num = state.currentQ + 1;
  const pct = ((num) / questions.length * 100).toFixed(1);
  const secLabel = sectionNames[q.sec] ? t(sectionNames[q.sec]) : q.sec;

  let optionsHtml = '';
  if (q.sec === 'A') {
    optionsHtml = renderOptionsA(q);
  } else if (q.sec === 'B') {
    optionsHtml = renderSlider(q);
  } else if (q.sec === 'C') {
    optionsHtml = renderOptionsC(q);
  } else if (q.sec === 'D') {
    optionsHtml = renderOptionsD(q);
  }

  const canGoNext = hasAnswer(state.currentQ);
  const isLast = state.currentQ === questions.length - 1;

  app().innerHTML = renderTopBar() + `
  <div class="quiz-page">
    <div class="progress-section">
      <div class="progress-label">
        <span>${num} / ${questions.length}</span>
        <span>${secLabel}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="section-indicator">SECTION ${q.sec}</div>
    <div class="question-text">${t(q)}</div>
    ${optionsHtml}
    <div class="nav-buttons">
      <button class="nav-btn" onclick="prevQ()" ${state.currentQ === 0 ? 'disabled' : ''}>${state.lang === 'zh' ? '←' : '←'}</button>
      ${isLast
        ? `<button class="nav-btn primary" onclick="showResults()" ${!canGoNext ? 'disabled' : ''}>${state.lang === 'zh' ? '查看結果' : 'See Results'}</button>`
        : `<button class="nav-btn primary" onclick="nextQ()" ${!canGoNext ? 'disabled' : ''}>${state.lang === 'zh' ? '→' : '→'}</button>`
      }
    </div>
  </div>`;
}

function renderOptionsA(q) {
  const selected = state.answers[state.currentQ];
  return `<div class="options-a">${q.opts.map((o, i) =>
    `<div class="option-card${selected === i ? ' selected' : ''}" onclick="selectA(${i})">${t(o)}</div>`
  ).join('')}</div>`;
}

function renderSlider(q) {
  const val = state.answers[state.currentQ] || 4;
  // Auto-set default if not answered yet
  if (state.answers[state.currentQ] === undefined) state.answers[state.currentQ] = 4;
  return `<div class="slider-container">
    <div class="slider-labels">
      <span>${t(q.lo)}</span>
      <span>${t(q.hi)}</span>
    </div>
    <div class="slider-track">
      <input type="range" min="1" max="7" value="${val}" oninput="slideChange(this.value)">
    </div>
    <div class="slider-value">${val}</div>
    <div class="slider-scale">${[1,2,3,4,5,6,7].map(n => `<span>${n}</span>`).join('')}</div>
  </div>`;
}

function renderOptionsC(q) {
  const selected = state.answers[state.currentQ] || [];
  return `<div class="options-c">${q.opts.map((o, i) =>
    `<div class="checkbox-card${selected.includes(i) ? ' selected' : ''}" onclick="toggleC(${i})">${t(o)}</div>`
  ).join('')}</div>`;
}

function renderOptionsD(q) {
  const selected = state.answers[state.currentQ];
  const hint = state.lang === 'zh'
    ? '二選一的選項有可能沒有完全符合你的，但請選擇一個你更能接受或是更接近你的即可。'
    : 'Neither option may perfectly describe you — simply choose the one that feels closer to you.';
  return `<p class="d-hint">${hint}</p><div class="options-d">${q.opts.map((o, i) =>
    `<div class="option-card option-d-card${selected === i ? ' selected' : ''}" onclick="selectD(${i})">${t(o)}</div>`
  ).join('')}</div>`;
}

function hasAnswer(idx) {
  const q = questions[idx];
  const ans = state.answers[idx];
  if (q.sec === 'A') return ans !== undefined && ans !== null;
  if (q.sec === 'B') return ans !== undefined && ans !== null;
  if (q.sec === 'C') return Array.isArray(ans) && ans.length > 0;
  if (q.sec === 'D') return ans !== undefined && ans !== null;
  return false;
}

// Global handlers
window.toggleLang = function() {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  render();
};

window.toggleTheme = function() {
  state.dark = !state.dark;
  document.body.classList.toggle('dark-mode', state.dark);
  render();
};

window.startQuiz = function() {
  state.page = 'quiz';
  state.currentQ = 0;
  state.answers = {};
  render();
};

window.selectA = function(i) {
  state.answers[state.currentQ] = i;
  render();
};

window.selectD = function(i) {
  state.answers[state.currentQ] = i;
  render();
};

window.slideChange = function(val) {
  state.answers[state.currentQ] = parseInt(val);
  const display = document.querySelector('.slider-value');
  if (display) display.textContent = val;
};

window.toggleC = function(i) {
  if (!Array.isArray(state.answers[state.currentQ])) state.answers[state.currentQ] = [];
  const arr = state.answers[state.currentQ];
  const idx = arr.indexOf(i);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(i);
  render();
};

window.prevQ = function() {
  if (state.currentQ > 0) { state.currentQ--; render(); }
};

window.nextQ = function() {
  if (state.currentQ < questions.length - 1) { state.currentQ++; render(); }
};

window.showResults = function() {
  state.scores = calculateScores();
  const result = determineType(state.scores);
  state.resultType = result.type;
  state.similarities = result.similarities;
  state.page = 'results';
  updateHash();
  render();
  window.scrollTo(0, 0);
  // Draw radar after DOM update
  setTimeout(() => drawRadar(), 50);
};

window.retakeQuiz = function() {
  state.page = 'landing';
  state.currentQ = 0;
  state.answers = {};
  state.scores = null;
  state.resultType = null;
  state.similarities = null;
  window.location.hash = '';
  render();
};

// ==================== ANALYSIS FUNCTIONS ====================
// Auxiliary candidates for each dominant function
const auxCandidates = {
  Ti:['Ne','Se'], Ni:['Te','Fe'], Fi:['Ne','Se'], Si:['Te','Fe'],
  Se:['Ti','Fi'], Ne:['Ti','Fi'], Te:['Ni','Si'], Fe:['Ni','Si']
};

// Type labels
const typeLabels = {
  INTJ:{zh:'策略型',en:'Strategist'},INTP:{zh:'探索型',en:'Explorer'},
  ENTJ:{zh:'指揮型',en:'Commander'},ENTP:{zh:'創新型',en:'Innovator'},
  INFJ:{zh:'洞察型',en:'Visionary'},INFP:{zh:'理想型',en:'Idealist'},
  ENFJ:{zh:'引導型',en:'Guide'},ENFP:{zh:'啟發型',en:'Inspirer'},
  ISTJ:{zh:'執行型',en:'Executor'},ISTP:{zh:'技術型',en:'Craftsman'},
  ESTJ:{zh:'管理型',en:'Manager'},ESTP:{zh:'行動型',en:'Doer'},
  ISFJ:{zh:'守護型',en:'Protector'},ISFP:{zh:'藝術型',en:'Artist'},
  ESFJ:{zh:'照顧型',en:'Caretaker'},ESFP:{zh:'表演型',en:'Performer'}
};

const funcLabel = {
  Se:{zh:'外傾感覺 (Se)',en:'Extraverted Sensing (Se)'},
  Si:{zh:'內傾感覺 (Si)',en:'Introverted Sensing (Si)'},
  Ne:{zh:'外傾直覺 (Ne)',en:'Extraverted Intuition (Ne)'},
  Ni:{zh:'內傾直覺 (Ni)',en:'Introverted Intuition (Ni)'},
  Te:{zh:'外傾思考 (Te)',en:'Extraverted Thinking (Te)'},
  Ti:{zh:'內傾思考 (Ti)',en:'Introverted Thinking (Ti)'},
  Fe:{zh:'外傾情感 (Fe)',en:'Extraverted Feeling (Fe)'},
  Fi:{zh:'內傾情感 (Fi)',en:'Introverted Feeling (Fi)'}
};

const funcShort = {
  Se:{zh:'即時感官',en:'present sensing'},Si:{zh:'經驗記憶',en:'experiential memory'},
  Ne:{zh:'可能性延伸',en:'possibility exploration'},Ni:{zh:'直覺洞察',en:'intuitive insight'},
  Te:{zh:'外部效率',en:'external efficiency'},Ti:{zh:'內在邏輯',en:'internal logic'},
  Fe:{zh:'群體和諧',en:'group harmony'},Fi:{zh:'個人價值',en:'personal values'}
};

// Get D-section win counts for a given function pair
function getDSectionWins(funcA, funcB) {
  let winsA = 0, winsB = 0;
  questions.forEach((q, idx) => {
    if (q.sec !== 'D') return;
    const ans = state.answers[idx];
    if (ans === undefined || ans === null) return;
    const chosen = q.opts[ans];
    if (!chosen) return;
    const funcsInQ = q.opts.map(o => (q.composite && o.fs) ? o.fs : [o.f]).flat();
    const hasA = funcsInQ.includes(funcA);
    const hasB = funcsInQ.includes(funcB);
    if (!hasA || !hasB) return;
    if (q.composite && chosen.fs) {
      if (chosen.fs.includes(funcA)) winsA++;
      if (chosen.fs.includes(funcB)) winsB++;
    } else {
      if (chosen.f === funcA) winsA++;
      else if (chosen.f === funcB) winsB++;
    }
  });
  return [winsA, winsB];
}

// Determine auxiliary tendency strength
function getAuxiliaryAnalysis(type, scores) {
  const stack = typeStacks[type];
  const dom = stack[0]; // dominant function
  const aux = stack[1]; // standard auxiliary
  const candidates = auxCandidates[dom];
  if (!candidates || candidates.length < 2) return null;

  const candA = candidates[0]; // e.g. Ne for Ti dom
  const candB = candidates[1]; // e.g. Se for Ti dom
  const [winsA, winsB] = getDSectionWins(candA, candB);
  const delta = (scores[candA] || 0) - (scores[candB] || 0);

  let winner, loser, winnerStr, loserStr;
  // Determine winner from D section + scores
  if (winsA > winsB) {
    winner = candA; loser = candB;
  } else if (winsB > winsA) {
    winner = candB; loser = candA;
  } else {
    // Tie in D section - use score delta
    if (delta >= 5) { winner = candA; loser = candB; }
    else if (delta <= -5) { winner = candB; loser = candA; }
    else { return { dominant: dom, auxA: candA, auxB: candB, balanced: true }; }
  }

  // Determine strength
  const winCount = Math.max(winsA, winsB);
  const absDelta = Math.abs(delta);
  const winnerDelta = winner === candA ? delta : -delta;

  if (winCount >= 2 && winnerDelta >= 5) winnerStr = state.lang === 'zh' ? '強' : 'strong';
  else if (winCount >= 2 && winnerDelta >= 2) winnerStr = state.lang === 'zh' ? '中' : 'moderate';
  else if (winCount >= 2) winnerStr = state.lang === 'zh' ? '弱' : 'weak';
  else if (winCount === 1) winnerStr = state.lang === 'zh' ? '弱' : 'weak';
  else winnerStr = state.lang === 'zh' ? '中' : 'moderate';

  loserStr = state.lang === 'zh' ? '弱' : 'weak';
  if (absDelta <= 5) loserStr = state.lang === 'zh' ? '中' : 'moderate';
  if (absDelta <= 2) loserStr = state.lang === 'zh' ? '弱' : 'weak';

  return { dominant: dom, winner, loser, winnerStr, loserStr, balanced: false };
}

// Detect fuzzy zone
function getFuzzyZone(type, scores, sims) {
  const stack = typeStacks[type];
  const dom = stack[0];
  const candidates = auxCandidates[dom];
  if (!candidates || candidates.length < 2) return null;

  const candA = candidates[0];
  const candB = candidates[1];
  const [winsA, winsB] = getDSectionWins(candA, candB);
  const scoreDiff = Math.abs((scores[candA] || 0) - (scores[candB] || 0));
  const dDiff = Math.abs(winsA - winsB);

  // Find the two candidate types
  let typeA = null, typeB = null;
  Object.keys(typeStacks).forEach(tp => {
    const s = typeStacks[tp];
    if (s[0] === dom && s[1] === candA) typeA = tp;
    if (s[0] === dom && s[1] === candB) typeB = tp;
  });

  // Fuzzy if D section close AND score diff small
  if (dDiff <= 1 && scoreDiff <= 5 && typeA && typeB) {
    const simDiff = typeA && typeB ? Math.abs((sims[typeA]||0) - (sims[typeB]||0)) : 999;
    return {
      isFuzzy: true,
      typeA, typeB, candA, candB,
      simDiff
    };
  }
  return { isFuzzy: false };
}

// Generate "why not another type" explanation
function getWhyNotType(type, scores, sims) {
  // Find second-best type
  const sorted = Object.keys(sims).sort((a, b) => sims[b] - sims[a]);
  const second = sorted[0] === type ? sorted[1] : sorted[0];
  if (!second) return null;

  const stack1 = typeStacks[type];
  const stack2 = typeStacks[second];

  // Find the key differentiating functions
  let diffFuncs = [];
  for (let i = 0; i < 4; i++) {
    if (stack1[i] !== stack2[i]) {
      diffFuncs.push({ pos: i, mine: stack1[i], theirs: stack2[i] });
    }
  }

  // Find the most relevant difference (usually auxiliary position)
  let keyDiff = diffFuncs.find(d => d.pos === 1) || diffFuncs[0];
  if (!keyDiff) return null;

  const myFunc = keyDiff.mine;
  const theirFunc = keyDiff.theirs;
  const [myWins, theirWins] = getDSectionWins(myFunc, theirFunc);
  const myScore = scores[myFunc] || 0;
  const theirScore = scores[theirFunc] || 0;

  return {
    secondType: second,
    myFunc, theirFunc,
    myWins, theirWins,
    myScore, theirScore,
    scoreDiff: myScore - theirScore
  };
}

function renderResults() {
  const type = state.resultType;
  const desc = typeDescs[type];
  const scores = state.scores;
  const sims = state.similarities;
  const zh = state.lang === 'zh';

  const sorted = funcNames.slice().sort((a, b) => scores[b] - scores[a]);
  const otherTypes = Object.keys(sims).sort((a, b) => sims[b] - sims[a]).slice(0, 6);
  const cogProfile = generateCogProfile(scores, sorted, type);
  const auxAnalysis = getAuxiliaryAnalysis(type, scores);
  const fuzzy = getFuzzyZone(type, scores, sims);
  const whyNot = getWhyNotType(type, scores, sims);
  const detail = typeDetailDescs[type];

  // Build layered info card
  let layeredHtml = '';
  if (auxAnalysis) {
    const stack = typeStacks[type];
    const domLabel = t(funcLabel[stack[0]]);
    if (auxAnalysis.balanced) {
      layeredHtml = `<div class="layered-card">
        <div class="layered-row"><span class="layered-label">${zh?'主功能':'Dominant'}</span><span class="layered-value">${stack[0]} — ${domLabel}</span></div>
        <div class="layered-row"><span class="layered-label">${zh?'輔助傾向':'Auxiliary'}</span><span class="layered-value">${auxAnalysis.auxA} / ${auxAnalysis.auxB}（${zh?'平衡':'balanced'}）</span></div>
        <div class="layered-row"><span class="layered-label">${zh?'類型':'Type'}</span><span class="layered-value">${type}（${t(typeLabels[type])}）</span></div>
      </div>`;
    } else {
      layeredHtml = `<div class="layered-card">
        <div class="layered-row"><span class="layered-label">${zh?'主功能':'Dominant'}</span><span class="layered-value">${stack[0]} — ${domLabel}</span></div>
        <div class="layered-row"><span class="layered-label">${zh?'輔助傾向':'Auxiliary'}</span><span class="layered-value">${auxAnalysis.winner}（${auxAnalysis.winnerStr}）｜${auxAnalysis.loser}（${auxAnalysis.loserStr}）</span></div>
        <div class="layered-row"><span class="layered-label">${zh?'類型':'Type'}</span><span class="layered-value">${type}（${t(typeLabels[type])}）</span></div>
      </div>`;
    }
  }

  // Build fuzzy zone HTML
  let fuzzyHtml = '';
  if (fuzzy && fuzzy.isFuzzy) {
    const descA = t(funcShort[fuzzy.candA]);
    const descB = t(funcShort[fuzzy.candB]);
    fuzzyHtml = `<div class="fuzzy-zone">
      <h3>${zh ? '模糊區提示' : 'Boundary Zone'}</h3>
      <div class="fuzzy-types">${fuzzy.typeA} / ${fuzzy.typeB}（${zh?'邊界型':'Boundary'}）</div>
      <p class="fuzzy-desc">${zh
        ? `你在${descA}（${fuzzy.candA}）與${descB}（${fuzzy.candB}）之間都具有明顯傾向，這兩個類型對你來說都有共鳴。`
        : `You show strong tendencies in both ${descA} (${fuzzy.candA}) and ${descB} (${fuzzy.candB}) — both types resonate with you.`}</p>
    </div>`;
  }

  // Build why-not HTML
  let whyNotHtml = '';
  if (whyNot) {
    const myFuncDesc = t(funcShort[whyNot.myFunc]);
    const theirFuncDesc = t(funcShort[whyNot.theirFunc]);
    let explanation = '';
    if (zh) {
      explanation = `你與 ${whyNot.secondType} 的差異主要在於：在關鍵分流題中，你更傾向 ${whyNot.myFunc}（${myFuncDesc}），而非 ${whyNot.theirFunc}（${theirFuncDesc}）。`;
      if (whyNot.theirScore > 30) {
        explanation += `雖然你的 ${whyNot.theirFunc} 分數也不低（${whyNot.theirScore}），但在決策傾向上仍偏向 ${whyNot.myFunc}。`;
      }
    } else {
      explanation = `The key difference between you and ${whyNot.secondType}: in critical branching questions, you lean toward ${whyNot.myFunc} (${myFuncDesc}) rather than ${whyNot.theirFunc} (${theirFuncDesc}).`;
      if (whyNot.theirScore > 30) {
        explanation += ` Although your ${whyNot.theirFunc} score isn't low (${whyNot.theirScore}), your decision tendency still favors ${whyNot.myFunc}.`;
      }
    }
    whyNotHtml = `<div class="why-not-section">
      <h3>${zh ? '為什麼不是另一型？' : 'Why Not Another Type?'}</h3>
      <p class="why-not-desc">${explanation}</p>
    </div>`;
  }

  app().innerHTML = renderTopBar() + `
  <div class="results-page">
    <div class="result-type">${type}</div>
    <img class="result-icon" src="images/${type}.png" alt="${type}">
    <div class="result-name">${t(desc.name)}</div>

    ${layeredHtml}

    <div class="radar-bars-row">
      <div class="radar-section">
        <h3>${zh ? '認知功能雷達圖' : 'Cognitive Function Radar'}</h3>
        <div class="radar-canvas-wrap">
          <canvas id="radarCanvas" width="400" height="400"></canvas>
        </div>
      </div>
      <div class="func-bars">
        <h3>${zh ? '功能分數排序' : 'Function Scores'}</h3>
        ${sorted.map(f => `
          <div class="func-bar-row">
            <span class="func-bar-label">${f}</span>
            <div class="func-bar-track"><div class="func-bar-fill bar-${f}" style="width:${scores[f]}%"></div></div>
            <span class="func-bar-score">${scores[f]}</span>
          </div>`).join('')}
      </div>
    </div>

    <div class="detail-desc">
      <h3>${zh ? '類型詳細說明' : 'Detailed Type Description'}</h3>
      <p>${detail ? t(detail) : t(desc.desc)}</p>
    </div>

    <div class="cog-profile">
      <h3>${zh ? '你的認知特色' : 'Your Cognitive Profile'}</h3>
      <p>${cogProfile}</p>
    </div>

    ${fuzzyHtml}
    ${whyNotHtml}

    <div class="other-types">
      <h3>${zh ? '其他可能的人格' : 'Other Possible Types'}</h3>
      ${otherTypes.map(tp => `
        <div class="other-type-row">
          <span class="other-type-label">${tp}</span>
          <div class="other-type-track"><div class="other-type-fill" style="width:${sims[tp]}%"></div></div>
          <span class="other-type-pct">${sims[tp]}%</span>
        </div>`).join('')}
    </div>

    <div class="share-section">
      <h3>${zh ? '分享結果' : 'Share Results'}</h3>
      <p class="share-hint">${zh ? '透過連結分享可保留完整結果' : 'Share via link to preserve full results'}</p>
      <div class="share-buttons">
        <button class="share-btn" onclick="downloadImage()">${zh ? '下載圖片' : 'Download Image'}</button>
        <button class="share-btn" onclick="copyLink()">${zh ? '複製連結' : 'Copy Link'}</button>
        <button class="share-btn" onclick="shareLine()">LINE</button>
        <button class="share-btn" onclick="shareFB()">Facebook</button>
        <button class="share-btn" onclick="shareTwitter()">Twitter</button>
        <button class="share-btn" onclick="shareIG()">Instagram</button>
      </div>
    </div>

    <button class="retake-btn" onclick="retakeQuiz()">${zh ? '重新測驗' : 'Retake Quiz'}</button>
  </div>`;
}

function generateCogProfile(scores, sorted, type) {
  const top2 = sorted.slice(0, 2);
  const bot2 = sorted.slice(-2);
  if (state.lang === 'zh') {
    return `你最突出的認知功能是 ${funcLabel[top2[0]].zh} 和 ${funcLabel[top2[1]].zh}，這代表你在日常生活中傾向於運用這些方式來感知世界和做出決策。你相對較少使用的功能是 ${funcLabel[bot2[0]].zh} 和 ${funcLabel[bot2[1]].zh}，這些可能是你在壓力下較容易忽略的面向。`;
  } else {
    return `Your strongest cognitive functions are ${funcLabel[top2[0]].en} and ${funcLabel[top2[1]].en}, meaning you naturally rely on these to perceive the world and make decisions. Your less-developed functions are ${funcLabel[bot2[0]].en} and ${funcLabel[bot2[1]].en}, which may be areas you overlook under stress.`;
  }
}

// ==================== RADAR CHART ====================
// placeholder: RADAR_CHART
function drawRadar(canvasId, scores, size) {
  canvasId = canvasId || 'radarCanvas';
  scores = scores || state.scores;
  size = size || 400;
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size / 2, cy = size / 2;
  const r = size * 0.35;
  const labels = funcNames; // Se,Si,Ne,Ni,Te,Ti,Fe,Fi
  const n = labels.length;

  // Clear
  ctx.clearRect(0, 0, size, size);

  // Draw grid rings
  const isDark = state.dark;
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const textColor = isDark ? '#9CA3AF' : '#6B7280';
  const fillColor = isDark ? 'rgba(148,163,184,0.2)' : 'rgba(74,85,104,0.15)';
  const strokeColor = isDark ? 'rgba(148,163,184,0.7)' : 'rgba(74,85,104,0.6)';

  for (let ring = 1; ring <= 4; ring++) {
    const rr = (r * ring) / 4;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + rr * Math.cos(angle);
      const y = cy + rr * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axes
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw data polygon
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const val = (scores[labels[idx]] || 0) / 100;
    const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
    const x = cx + r * val * Math.cos(angle);
    const y = cy + r * val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw dots and labels
  ctx.font = `600 ${Math.round(size * 0.035)}px Outfit, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < n; i++) {
    const val = (scores[labels[i]] || 0) / 100;
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    // Dot
    const dx = cx + r * val * Math.cos(angle);
    const dy = cy + r * val * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(dx, dy, 3, 0, Math.PI * 2);
    ctx.fillStyle = funcColors[labels[i]];
    ctx.fill();
    // Label
    const lx = cx + (r + size * 0.06) * Math.cos(angle);
    const ly = cy + (r + size * 0.06) * Math.sin(angle);
    ctx.fillStyle = textColor;
    ctx.fillText(labels[i], lx, ly);
  }
}

// ==================== SHARE IMAGE ====================
// placeholder: SHARE_IMAGE
function generateShareImage() {
  return new Promise((resolve) => {
    const canvas = document.getElementById('shareCanvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    const isDark = state.dark;
    const zh = state.lang === 'zh';
    const bg = isDark ? '#111111' : '#FFFFFF';
    const text = isDark ? '#F0F0F0' : '#1A1A1A';
    const subtle = isDark ? '#9CA3AF' : '#6B7280';
    const barBg = isDark ? '#2D2D2D' : '#E5E7EB';
    const cardBg = isDark ? '#1E1E1E' : '#F3F4F6';
    const borderC = isDark ? '#2D2D2D' : '#E5E7EB';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 1200, 800);

    // Title
    ctx.fillStyle = subtle;
    ctx.font = '500 18px Outfit, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('16 Types MBTI Quiz', 60, 45);

    // Type
    ctx.fillStyle = text;
    ctx.font = '700 72px Outfit, sans-serif';
    ctx.fillText(state.resultType, 60, 125);

    // Type name + label
    const desc = typeDescs[state.resultType];
    const label = typeLabels[state.resultType];
    ctx.font = '500 24px Outfit, sans-serif';
    ctx.fillStyle = subtle;
    ctx.fillText(`${t(desc.name)} — ${t(label)}`, 60, 165);

    // Layered info card
    const auxAnalysis = getAuxiliaryAnalysis(state.resultType, state.scores);
    if (auxAnalysis) {
      const stack = typeStacks[state.resultType];
      ctx.fillStyle = cardBg;
      ctx.beginPath(); ctx.roundRect(60, 185, 480, 80, 8); ctx.fill();
      ctx.strokeStyle = borderC; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.roundRect(60, 185, 480, 80, 8); ctx.stroke();
      ctx.fillStyle = text;
      ctx.font = '500 15px Source Sans 3, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${zh?'主功能':'Dom'}: ${stack[0]}`, 80, 215);
      if (auxAnalysis.balanced) {
        ctx.fillText(`${zh?'輔助傾向':'Aux'}: ${auxAnalysis.auxA} / ${auxAnalysis.auxB} (${zh?'平衡':'balanced'})`, 80, 240);
      } else {
        ctx.fillText(`${zh?'輔助傾向':'Aux'}: ${auxAnalysis.winner}(${auxAnalysis.winnerStr}) | ${auxAnalysis.loser}(${auxAnalysis.loserStr})`, 80, 240);
      }
      ctx.fillText(`${zh?'類型':'Type'}: ${state.resultType} (${t(label)})`, 80, 255);
    }

    // Short description (first ~60 chars)
    const detailText = typeDetailDescs[state.resultType] ? t(typeDetailDescs[state.resultType]) : t(desc.desc);
    const shortDesc = detailText.length > 80 ? detailText.substring(0, 80) + '...' : detailText;
    ctx.fillStyle = subtle;
    ctx.font = '400 14px Source Sans 3, sans-serif';
    ctx.textAlign = 'left';
    wrapText(ctx, shortDesc, 60, 295, 480, 20);

    // Function bars on the left
    const sorted = funcNames.slice().sort((a, b) => state.scores[b] - state.scores[a]);
    const barX = 60, barW = 250, barH = 12, barGap = 30;
    let barY = 370;
    ctx.font = '600 14px Outfit, sans-serif';
    sorted.forEach(f => {
      ctx.fillStyle = text; ctx.textAlign = 'right';
      ctx.fillText(f, barX + 28, barY + barH / 2 + 4);
      ctx.fillStyle = barBg; ctx.beginPath(); ctx.roundRect(barX + 36, barY, barW, barH, 4); ctx.fill();
      ctx.fillStyle = funcColors[f]; ctx.beginPath(); ctx.roundRect(barX + 36, barY, barW * (state.scores[f] / 100), barH, 4); ctx.fill();
      ctx.fillStyle = subtle; ctx.textAlign = 'left';
      ctx.font = '400 12px Source Sans 3, sans-serif';
      ctx.fillText(state.scores[f], barX + 44 + barW, barY + barH / 2 + 3);
      ctx.font = '600 14px Outfit, sans-serif';
      barY += barGap;
    });

    // Mini radar on the right
    drawRadarToCtx(ctx, state.scores, 600, 300, 220, isDark);

    // Other possible types (top 3)
    const sims = state.similarities;
    const topTypes = Object.keys(sims).sort((a, b) => sims[b] - sims[a]).slice(0, 3);
    ctx.fillStyle = text;
    ctx.font = '600 15px Outfit, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(zh ? '其他可能的人格' : 'Other Possible Types', 600, 570);
    let otY = 590;
    ctx.font = '500 14px Source Sans 3, sans-serif';
    topTypes.forEach(tp => {
      ctx.fillStyle = text; ctx.textAlign = 'left';
      ctx.fillText(`${tp}`, 600, otY);
      ctx.fillStyle = barBg; ctx.beginPath(); ctx.roundRect(660, otY - 10, 200, 10, 3); ctx.fill();
      ctx.fillStyle = isDark ? '#94A3B8' : '#4A5568';
      ctx.beginPath(); ctx.roundRect(660, otY - 10, 200 * (sims[tp] / 100), 10, 3); ctx.fill();
      ctx.fillStyle = subtle; ctx.textAlign = 'left';
      ctx.fillText(`${sims[tp]}%`, 870, otY);
      otY += 28;
    });

    // Link hint
    ctx.fillStyle = subtle;
    ctx.font = '400 14px Source Sans 3, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(zh ? '使用連結查看完整結果' : 'Use link to view full results', 600, 740);

    // Watermark
    ctx.textAlign = 'right';
    ctx.fillText('iner-quiz.com', 1150, 775);

    resolve(canvas);
  });
}

// Helper: wrap text
function wrapText(ctx, text, x, y, maxW, lineH) {
  let line = '';
  for (let i = 0; i < text.length; i++) {
    const testLine = line + text[i];
    if (ctx.measureText(testLine).width > maxW && line) {
      ctx.fillText(line, x, y);
      line = text[i]; y += lineH;
    } else { line = testLine; }
  }
  ctx.fillText(line, x, y);
}

function drawRadarToCtx(ctx, scores, ox, oy, size, isDark) {
  const cx = ox + size / 2, cy = oy + size / 2;
  const r = size * 0.38;
  const labels = funcNames;
  const n = labels.length;
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const textColor = isDark ? '#9CA3AF' : '#6B7280';
  const fillColor = isDark ? 'rgba(148,163,184,0.25)' : 'rgba(74,85,104,0.2)';
  const strokeColor = isDark ? 'rgba(148,163,184,0.7)' : 'rgba(74,85,104,0.6)';

  for (let ring = 1; ring <= 4; ring++) {
    const rr = (r * ring) / 4;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
      const x = cx + rr * Math.cos(angle);
      const y = cy + rr * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.stroke();
  }

  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const val = (scores[labels[idx]] || 0) / 100;
    const angle = (Math.PI * 2 * idx) / n - Math.PI / 2;
    const x = cx + r * val * Math.cos(angle);
    const y = cy + r * val * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.fillStyle = fillColor; ctx.fill();
  ctx.strokeStyle = strokeColor; ctx.lineWidth = 2; ctx.stroke();

  ctx.font = '600 12px Outfit, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const lx = cx + (r + 18) * Math.cos(angle);
    const ly = cy + (r + 18) * Math.sin(angle);
    ctx.fillStyle = textColor;
    ctx.fillText(labels[i], lx, ly);
  }
}

window.downloadImage = async function() {
  const canvas = await generateShareImage();
  const link = document.createElement('a');
  link.download = `INER-${state.resultType}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
};

window.copyLink = function() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert(state.lang === 'zh' ? '已複製連結！' : 'Link copied!');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = url; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    alert(state.lang === 'zh' ? '已複製連結！' : 'Link copied!');
  });
};

window.shareLine = function() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`My MBTI type is ${state.resultType}!`);
  window.open(`https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`, '_blank');
};

window.shareFB = function() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

window.shareTwitter = function() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(state.lang === 'zh'
    ? `我的 MBTI 類型是 ${state.resultType} - ${t(typeDescs[state.resultType].name)}！來測測你的認知功能吧！`
    : `My MBTI type is ${state.resultType} - ${t(typeDescs[state.resultType].name)}! Take the cognitive function quiz!`);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
};

window.shareIG = async function() {
  const canvas = await generateShareImage();
  canvas.toBlob(async (blob) => {
    // Try Web Share API with file (works on mobile)
    if (navigator.share && navigator.canShare) {
      const file = new File([blob], `INER-${state.resultType}.png`, { type: 'image/png' });
      const shareData = { files: [file] };
      if (navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch(e) { /* fallback below */ }
      }
    }
    // Fallback: download image + show instructions
    const link = document.createElement('a');
    link.download = `INER-${state.resultType}.png`;
    link.href = URL.createObjectURL(blob);
    link.click();
    setTimeout(() => {
      alert(state.lang === 'zh'
        ? '圖片已下載！請開啟 Instagram，長按圖片分享到限時動態。'
        : 'Image downloaded! Open Instagram and share the image to your Stories.');
    }, 300);
  }, 'image/png');
};

// ==================== URL HASH ====================
// placeholder: URL_HASH
function updateHash() {
  if (!state.scores) return;
  const vals = funcNames.map(f => state.scores[f].toString(36)).join(',');
  window.location.hash = `r=${vals}`;
}

function checkHash() {
  const hash = window.location.hash;
  if (!hash || !hash.startsWith('#r=')) return;
  try {
    const parts = hash.substring(3).split(',');
    if (parts.length !== 8) return;
    const scores = {};
    funcNames.forEach((f, i) => {
      scores[f] = parseInt(parts[i], 36);
      if (isNaN(scores[f])) throw new Error('bad');
    });
    state.scores = scores;
    const result = determineType(scores);
    state.resultType = result.type;
    state.similarities = result.similarities;
    state.page = 'results';
    // Defer radar draw
    setTimeout(() => drawRadar(), 100);
  } catch(e) {
    // Invalid hash, ignore
  }
}

// ==================== INIT ====================
function init() {
  checkHash();
  render();
  initCatCursor();
}

// ==================== CAT CURSOR ====================
function initCatCursor() {
  // Don't init on touch devices
  if ('ontouchstart' in window && window.matchMedia('(hover: none)').matches) return;

  // Use PNG images for cursors
  const defaultImg = 'images/cursor-default.png';
  const hoverImg = 'images/cursor-hover.png';

  // Preload images
  const preload1 = new Image(); preload1.src = defaultImg;
  const preload2 = new Image(); preload2.src = hoverImg;

  const cursor = document.createElement('div');
  cursor.className = 'cat-cursor';
  cursor.innerHTML = `<img src="${defaultImg}" alt="" draggable="false" style="width:100%;height:100%;">`;
  document.body.appendChild(cursor);

  let mouseX = -100, mouseY = -100;
  let curX = -100, curY = -100;
  let isHovering = false;

  const interactiveSelectors = 'button, .option-card, .checkbox-card, .nav-btn, .top-btn, .start-btn, .share-btn, .retake-btn, a, input[type="range"]';

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursor.classList.contains('visible')) {
      cursor.classList.add('visible');
    }

    // Check if hovering over interactive element
    const target = e.target;
    const hovering = target && target.closest(interactiveSelectors);
    if (hovering && !isHovering) {
      isHovering = true;
      cursor.querySelector('img').src = hoverImg;
      cursor.classList.add('hovering');
    } else if (!hovering && isHovering) {
      isHovering = false;
      cursor.querySelector('img').src = defaultImg;
      cursor.classList.remove('hovering');
    }
  });

  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
  document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
  document.addEventListener('mouseenter', () => cursor.classList.add('visible'));

  function animate() {
    curX += (mouseX - curX) * 0.2;
    curY += (mouseY - curY) * 0.2;
    cursor.style.left = curX + 'px';
    cursor.style.top = curY + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

init();

})();
