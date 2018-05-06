module.exports = {
    triggers:{              //regex that trigger the bot
        who : /^bro honest answer who/i,
        why : /^bro honest answer why/i,
        how : /^bro honest answer how/i,
        howMuch : /^bro honest answer how much/i,
        where : /^bro honest answer where/i,
        what : /^bro honest answer what/i,
        when : /^bro honest answer when/i,
        honestAnswer : /^bro honest answer/i,
        gened: /^bro gened/i,
        answer : /^bro answer/i,
        r :/^bro r\//i,
        trivia : /^bro trivia/i,
        tldr : /^bro tldr/i,
        startTopic :/^bro start topic/i,
        endTopic : /^bro end topic/i,
        youRight: /you right|u right|u rite|you rite|you're right|ur right| you're rite|ur rite/i,
        help : /^bro help$/i,
        greet: /^hi bro|hey bro|hello bro|(s|z|\s)up bro|how are you bro|screw you bro|yo bro/i,
        konami: /konami code/i,
        cheat: /↑ ↑ ↓ ↓ ← → ← → B A|up up down down left right left right B A/i,
        messUp: /^bro mess up/i,
        merit : /merit/i,
        mank : /mank/i,
        pregnant : /pregnant/i,
        wasabi : /wasabi/i,
        bruh : /bruh/i,
        wtf : /what the actual fuck|what the fuck|dafuq/i,
        holyShit : /holy shit/i,
        city : /city/i,
        state : /state/i,
        country : /country/i,
        brownie : /brownie/i,
        fbla: /fbla/i,
        ban: /^bro ban/i,
        unban: /^bro unban/i,
        search: /^bro search/i,
        add: /^bro add/i,
        kick: /^bro kick/i,
        wake: /^bro wake up/i,
        gtfo: /^bro gtfo/i,
        set: /^bro set/i,
        nickname: /nickname/i,
        broCode: /bro code/i,
        define: /bro define/i,
        antonym: /bro antonym/i,
        synonym: /bro synonym/i,
        upvote: /bro \+\+/i,
        downvote: /bro \-\-/i,
        //answers to why
        reasons : [
            "Don't ask me why, tis just the way it is", "WHY? well BECAUSE!", "because Trump became the president", "because I love bernie sanders",
            "Because your knees are weak, arms heavy. there's vomit on your sweater already, mom's spaghetti.", "Because my milkshake brings all the boys to the yard",
            "because I sometimes also feel like a plastic bag, drifting through the wind, wanting to start again", "because if you redefine the meaning of a word, you can achieve anything",
            "belive me, because if you stop going forward, you're either staying in the same place or going backwards",
            "trust me, I am the person who knows the most about this subject. Trust me. Because if you take 3 squared and multiply by 4, the pizza store downstairs will increase production which leads to a lowering of freezing point of ice around the store. This results in serious damage to wild animals. Thus the answer to your question",
            "believe me, because I said so and I know the most about this subject. Nobody knows more than I do.",
            "first of all, I will definitely answer your question. and I just wanna say: Not a simple question. Not a fair question. Okay, sit down. I understand the rest of your question. ... So here's the story, folks. number one: I am the least anti-Semitic person that you've ever seen in your entire life.",
            "because there's a problem. And I will build a great wall(not the one in fucking China) -- and nobody builds walls better than me, believe me --and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make YOU pay for that wall. Mark my words.",
            "because I've done a tremendous job preventing people like Affan from entering our country",
            "you need to stop asking me questions", "ask again later", "Did I tell you to ask again later?"
        ],
        things : [
            "your face", "poop", "penis", "used condoms", "nothing", "the very left hair on my toe",
            "dog food", "your left hand", "your mom's shirt", "my butt", "Kuoyuan's ear", "My tongue",
            "my friend's mom's secret male friend Joe's tip", "a hot chick", "two hot chicks", "three hot chicks",
            "many hot chicks", "trash", "tears", "trees", "pugs", "a chair", "sacrificed food", "pork", "mom's spaghetti",
            "my mind", "my laptop", "hmmmm", "Morty's butthole", "Rick's pickle", "memes"
        ],
        times : [
            "Not today baby, not today", "not now", "RIGHT NOW", "Don't worry about it",
            "in an hour", "before the dawn", "sunset", "Next year", "when Trump retires",
            "year 1776","year 6666","winter", "last fall", "next spring", "every fucking summer", "a minute ago",
            "uhhh last week?", "lmao it was yesterday", "not gonna happen until another 500 years",
            {url:"https://www.youtube.com/watch?v=3y7rqHYNP0Y"}, "uhhhhh ask again later", "tomorrow for sure",
            "when Rick and Morty season 6 comes out", "when Hillary becomes president",
            "when kuoyuan is 6 ft, which is right now if you didn't know, visit me at tinder/kuoyuan"
        ],
        places : [
            "I don't fucking know", "I seriously have no idea", "Could be anywhere",
            "In the North Pole", "Hogwarts", "in my pants", "on someone's bed", "Dean's office",
            "in a wonderful place where evil doesn't exist", "Nirvana", "yard where all the boy are at",
            "don't worry about it", "Heaven", "Hell", "next to Jesus", "Rick's garage", "1st President D.C",
            "above my head", "in my hand", "check the bathroom on second floor of my apartment",
            "Poké Center"
        ],
        amount : [
            "a lot", "a shit ton", "not so much", "none at all", "you don't need to know",
            "that is sensitive personal information", "less than the amount of fat in your body",
            "ask Kuoyuan", "ask again later", "don't worry about it", "hmmm", "idc, kys"
        ],
        ways : [
            "by seppuku", "Don't worry about it", "not possible", "There's no way",
            "Never heard of that", " can be achieved with a three step process: \n - git good \n - stop being cucked \n - give Kuoyuan a call",
            "IKR it doesn't make any sense, I don't see how either", "kys", "stop being a mank",
            "lmao you're asking me? how? lmfao", "uhhhh \nhow the fuck would I know that?", "Kuoyuan knows"
        ],
        people : [
            "Donald Trump", "Someone better looking than you", "me\n me\n me\n me\n me\n me\n me\n me\n me\n me\n",
            "Someone you don't know", "There's no such person", "Harry Styles", "The Rock", "FART!",
            "My mom", "Kuoyuan!", "IT'S KUOYUAN!!! ", "Not me.", "Ben's brother's neighbor's litter sister's teacher's dog",
            "definitely not Kuoyuan", "I seriously have no clue" ,"Give me a break, ask someone else",
            "you know who would know that? \nnot me, so gtfo", "uhhh Steve Jobs", "ask again later", "Now that, is an interesting question.",
            "William Gates", "Bill Howard Taft", "Bill Shakespeare", "William Nye", "You think I care because?",
            {url: 'https://www.youtube.com/watch?v=zO9RzrhYR-I'}

        ],
        answers : [
            "Time will tell",
            "yes",
            "YES",
            "Of course",
            "Obviously",
            "NO",
            "nah",
            "My mind is telling me no, but my body, MY BODY! is telling me yes!",
            "Oh shit, there's a bug on me, ask again later",
            "naw you crazy",
            "never",
            "why does it matter?",
            "mind your own business",
            "maybe \nmaybe not",
            "fo sho man. ayyy that's my {insert racial slur here}",
            "you know who would know the answer to that? ME! but im not telling you",
            "0",
            "1",
            "same answer as whether McDonald's will become the best fast food company",
            "same answer as whether I like food",
            "idk \nidc",
            "That, is a good question and as I was saying, McDonald's has been doing surprisingly well",
            "give me 5 sec and ask again",
            "Idgaf ask someone else",
            "what? no, hell no",
            "ayyyy for sure",
            "spell it with me \n y \n e \n s \ncome on its yes",
            "no means no",
            {body: "seulpeohajima no no no\nhonjaga anya no no no", url:"https://www.youtube.com/watch?v=dbQ5FSnExYg"},
            {body: "uhhh yes\nI mean no...\nactually maybe", url:"https://www.youtube.com/watch?v=b34ri3-uxks"},
            {body: "say yes", url:"https://www.youtube.com/watch?v=vT-raVIAT9A"}
        ],
        greetings : [
            "what up my homie",
            "what is updog?",
            "sup dawg",
            "hey",
            "sup man",
            "hey sexy",
            "What's new",
            "How's life",
            "Howdy",
            "Alright mate",
            "Hiya!",
            "You alright?",
            "How's it going",
            "heyo",
            "sup",
            "what's good",
            "how you doing",
            "you talking to me?",
            {url: "https://www.youtube.com/watch?v=skZxb5sBoiU"},
            "hi",
            "helllo",
            "hey there girl ;)",
            "oh hi didn't see you there",
            "ooh hiiii, ^_^ you're really pretty. can I have your number?",
            "so I asked siri what I should say to a cute girl who greeted me, she said tell her:'you auto-complete me'",
            "oooh look at you, cute guy, you are looking hella fine today",
            "wasuuuuh",
            "what up",
            "hi, how are you?",
            "hola",
            "你好",
            "Bonjour",
            "Hallo",
            "Фэсапщы",
            "Bok",
            "今日は",
            "Ave",
            "Alo, Efendim",
            "Bunâ dzuâ",
            "(min-ga-la-ba)",
            "Ciao",
            "こんにちは",
            "Salve",
            "안녕하세요"
        ],
        commandExplanation : {
            answer: "Answers your question seriously. \ncan answer math questions(integral, derivative) \nPS: If you have a legitimate question, I have a legitimate answer",
            honest: "Unpredictable response. But will be my most honest answers. Guaranteed. \nCan answer who, where, when, why, how, how much.",
            search: "Searches facebook users for a closest match to the input name",
            kick: "Removes a user from the group chat. if there's number after the command, e.g. bro kick PERSON 5, the person will be kicked for 5 seconds then added back to the chat",
            add: "Adds a user to the group chat",
            wakeUp: "Messages the user 'hey wake up!' 10 times if the user is in current group chat. If not, will message 'Someone wants me to wake you up'",
            set: "Sets the nickname for a user",
            define: "Returns the best definitions for the input word",
            synonym: "Returns synonyms for the input word",
            greet: "Say hello, hi, hey, etc. to me. Example:hi bro, sup bro, wuzzup bro, etc",
            alive: "Is used to check if bot is working",
            r: "Returns a post from a subreddit. Syntax: bro r/dankmemes",
            triviaNumber: "Finds a fun fact about a number. Example: 'bro trivia number 16'",
            triviaYear: "Finds a fun fact about a year. Example: 'bro trivia year 1266'",
            triviaDate: "Finds a fun fact about a date. Example: 'bro trivia date 10/4' ",
            triviaMath: "Finds a math fun fact about a number. Example: 'bro trivia math 1043'"

        },
        basic: `Hi people of this group chat, I am a facebook chat bot. The commands to use me are
        -bro alive
        -greet me(say hi, etc)
        -bro answer{question}
        -bro honest answer{question}
        -bro search {name}
        -bro gtfo
        -bro kick {name} [duration]
        -bro add {name}
        -bro wake up {name}
        -bro set {name} nickname {nickname}
        -bro define {word}
        -bro synonym {word}
        -bro r/ (returns a post from a subreddit)
        -bro trivia number {number}
        -bro trivia year {year}
        -bro trivia math {number}
        -bro trivia date {month/day}
        -super command (can only be accessed with a secret cheat code)
        Tip: use bro help {command} to get details about a command`
    },
    commands : {
        alive:/bro help alive/i,
        triviaNumber: /bro help trivia number/i,
        triviaYear: /bro help trivia year/i,
        triviaDate: /bro help trivia date/i,
        triviaMath: /bro help trivia math/i,
        greet:/bro help greet me/i,
        answer: /bro help answer/i,
        honest: /bro help honest answer/i,
        search: /bro help search/i,
        gtfo: /bro help gtfo/i,
        kick: /bro help kick/i,
        add: /bro help add/i,
        wakeUp: /bro help wake up/i,
        set: /bro help set/i,
        define: /bro help define/i,
        synonym: /bro help synonym/i,
        r: /bro help r\//i
    },
    easterEggs : {
        broCode: "Bro Code\nArticle 1 - Bros before ho’s\nArticle 2 : A bro is always entitled to do something stupid, as long as the rest of his Bros are all doing it\nArticle 3 : If a Bro gets a dog, it must be at least as tall as his knee when full-grown\nArticle 4 : A Bro never divulges the existence of The Bro Code to a woman. It is a sacred document not to be shared with chicks for any reason… no, not even that reason\nArticle 10 : A Bro will drop whatever he’s doing and rush to help his Bro dump a chick\nArticle 31 - A bro must always oblige to fulfill the actions of a double-dog dare\nArticle 34 - Bros cannot make eye contact during a devils three-way\nArticle 62 - A bro that calls dibs first, has dibs \nArticle 78 - A Bro shall never rack jack his wingman\nArticle 104 - The mom of a bro is always off limits, unless she is a step-mom and she initiates it and/or is wearing one or more articles of leopard print clothing",
        bruh: "yeah?",
        merit: "are you worthless? \n you have absolutely no merit to society",
        brownie: "hehe brownie, good times",
        fbla: "FUCK RIVERHILL",
        konami:"↑ ↑ ↓ ↓ ← → ← → B A"
    },
    groups : []


}
