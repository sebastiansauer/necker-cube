// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "global.Pavlovia"
    }
  ],
  "metadata": {
    "title": "Attention span study using the Necker Cube bistabile image (template)",
    "description": "\u003Cp\u003EThis study investigates attentional processes using a well-known bistabile image paradigm. Precisely, participants watch the Necker cube, a simple wire frame cube. The necker cube can be perceived in one of two perspectives. After a couple of seconds, the perspective \"flips\" from one perspective to the other. This flip or change in perception cannot (readily) suspended by will, although there is some variation in the inter-flip interval. For instance, the flip span has be associated with the temporal expansion of the working memory (cf. Sauer et al., 2012).\u003C\u002Fp\u003E\n\n\n\u003Cp\u003ELiterature:\u003C\u002Fp\u003E\n\u003Cp\u003ESauer, S., Lemke, J., Wittmann, M., Kohls, N., Mochty, U., & Walach, H. (2012). How long is now for mindfulness meditators? Personality and Individual Differences, 52(6), 750-754. http:\u002F\u002Fdx.doi.org\u002F10.1016\u002Fj.paid.2011.12.026\u003C\u002Fp\u003E\n\n\u003Cp\u003EAbstract\u003C\u002Fp\u003E\n\u003Cp\u003EThe experience of the present moment is characterized by an integrative mechanism that fuses successive events into a unitary phenomenological experience with a temporal limit of about 3s. We hypothesized that proficiency of mindfulness expands the ability to stabilize an ambiguous percept in a bistable image paradigm using the Necker Cube, and that this effect is associated with individual differences in the level of mindfulness. Expanded duration of nowness as indicated by the ability to stabilize a bistable image stimulus for a longer period of time may improve cognitive resources and thus be of practical interest. In a sample of n = 38 meditators and n = 38 non-meditators, meditators showed longer duration of subjective nowness. This effect was associated with individual mindfulness levels. It is concluded that the subjective now can be longer for meditators than for non-meditators, and individual levels of mindfulness may convey this effect. (PsycINFO Database Record (c) 2016 APA, all rights reserved)\u003C\u002Fp\u003E\n\n",
    "repository": "https:\u002F\u002Fosf.io\u002F4y2jp\u002F ",
    "contributors": "Sebastian Sauer \u003Csebastian.sauer@fom.de\u003E"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Welcome",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EWelcome to the Necker cube study on attention processes\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EThis study investigates attention processeses.\u003C\u002Fp\u003E\n    \u003Cp\u003EThis study is part of ongoing research activities \n      of the department of psychology at the FOM university.\n      The principal investigator is Professor Dr. Sebastian Sauer. \n      Please contact this person for any questions. \n      Your participation supports the research about mental processing.\n      \u003C\u002Fp\u003E\n\n  \u003Cp\u003E\n    Principal investigator: \u003Cbr\u003E\n    Sebastian Sauer \u003C\u002Fbr\u003E\n    FOM University \u003Cbr\u003E\n    email: sebastian.sauer@fom.de \u003Cbr\u003E\n    url: \u003Ca href=\"https:\u002F\u002Fwww.fom.de\u002F\"\u003E \n    https:\u002F\u002Fwww.fom.de\u002F \u003C\u002Fa\u003E\n  \u003C\u002Fp\u003E\n\n      \u003Cp\u003EFor more information on the study,\n      please press the \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E bar to continue.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  to proceed to the participants' instructions for this study.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Consent",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EInformed Consent\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n   \n      \u003Cp\u003E\n      We are conducting this web-based study in order to investigate\n      mental processes using bistabile images \n      (see next page for an example). \n      You will see an image on the screen \n      and you will be asked to press a button according to your \n      perception of the image.\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E\n      \u003Cstrong\u003E Before participating it is important that you \n        understand what your participation would involve. \n        Please take time to read the following information carefully.  \n      \u003C\u002Fstrong\u003E\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E\n      In order to participate, you must be 18 years or older. \n      There are special incentives to participate in the study.\n      \u003C\u002Fp\u003E\n   \n      \u003Cp\u003E\n      Your participation in this study is completely voluntary \n      and you may withdraw at any time without penalty. \n      If you choose to participate, \n      it will take approximately 5-10 minutes of your time.\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E    \n      Your privacy and safety will be respected at all times. \n      Participants will not be identified by the data collected. \n      Please note that it will therefore not be possible to request \n      or delete your data, as it will not be possible to identify it.\n      Please do not enter \n      any information that may de-anonymize yourself \n      (such as email adresses). \n      Contact details will be repeated on the last page, so\n      that you can contact us for any question regarding the study.\n      \u003C\u002Fp\u003E\n    \n      \u003Cp\u003E\n      There are none known potential consequences of participating\n      in the study; potential risks, \n      adverse side effects or discomfort are not to be expected.\n      Participants do not have to answer all questions asked of them \n      and can stop their participation at any time\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E\n      Data (anonymous) will be stored for research purposes \n      for an indefinite period of time. \n      It is planned to provide the data openly so that other researcher\n      may use them for subsequent research.\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E\n      You are free to withdraw from the research study \n      at any time without explanation, disadvantage or consequence. \n      However, if you withdraw, I would reserve the right to use \n      Material that you provide up until \n      the point of my analysis of the data. \n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E By proceeding the the next page you confirm that you have read and understood the information provided above. \n\n    \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  to proceed to the instructions for this study.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "continue"
      },
      "messageHandlers": {},
      "title": "Necker Cube",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EThe \"Necker Cube\" - main research object of this study\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n    \u003Cp\u003EBelow you can seee the wire-frame \"Necker Cube\" (upper panel).\n     \n      If you look ath the cube long enough, \n      it will seem to \"flip\" between patterns.\n      These two patterns are depicted in the lower panel.\n      \u003C\u002Fp\u003E\n\n      \u003Cp\u003E Test it: Concentrate on the cube (upper panel) until your perception flips.\u003C\u002Fp\u003E\n\n      \u003Cp\u003E Your task will be to concentrate on the cube, \n        hitting the space key \n        \u003Cemph\u003Eeach time\u003C\u002Femph\u003E and \u003Cemph\u003E as soon as\u003C\u002Femph\u003E your perception flips.\u003C\u002Fp\u003E\n\n      \u003Cp\u003E It does not matter whether it flips from this to that perception,\n        or from that to this perception. \n        It does not matter how long it takes until it flips. \n        Just hit the space bar whenever a flip occurs.\n      \u003C\u002Fp\u003E\n\n  \u003C\u002Fmain\u003E\n\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\n    \u003Cfigure\u003E\n      \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fsebastiansauer\u002Fnecker-cube\u002Fmaster\u002Fimg\u002FNecker-Cube-crop.png\" \n        alt=\"Necker Cube\"     \n        width=\"300\" \n        height=\"300\"\u003E\n\n      \u003Cbr\u002F\u003E\n        \u003Cfigcaption\u003E Upper panel: The Necker cube  \u003C\u002Ffigcaption\u003E\n\n    \u003C\u002Ffigure\u003E\n\n\n\n  \u003C\u002Fmain\u003E\n\n   \u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n \n\n      \u003Cfigure\u003E\n        \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fsebastiansauer\u002Fnecker-cube\u002Fmaster\u002Fimg\u002FNecker-Cube-left-crop.png\" \n        alt=\"Necker Cube, view A\"     \n      width=\"200\" \n        height=\"200\"\n        title = \"Lower panel. Configuration A\"\n        align = \"left\"\u003E\n        \u003Cbr\u002F\u003E\n        \u003Cfigcaption\u003E Lower panel. Configuration A\u003C\u002Ffigcaption\u003E\n      \u003C\u002Ffigure\u003E\n\n     \u003Cfigure\u003E\n       \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fsebastiansauer\u002Fnecker-cube\u002Fmaster\u002Fimg\u002FNecker-Cube-right-crop.png\" \n        alt=\"Necker Cube, View B\"     \n    \n        width=\"200\" \n        height=\"200\"\n        title = \"Lower panel.  Configuration B\"\n\n        align = \"right\"\u003E      \n        \u003Cfigcaption\u003E Lower panel. Configuration B\u003C\u002Ffigcaption\u003E\n    \u003C\u002Ffigure\u003E\n\n  \u003C\u002Fmain\u003E\n\n\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  to proceed to the instructions for this study.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "title": "Instructions",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch1 class=\"text-center\"\u003EInstructions\u003C\u002Fh1\u003E\n\n    \n    \u003Cp\u003E There will be two rounds:\u003C\u002Fp\u003E\n    \n    \u003Cp\u003E1. In the first round, your task is to \u003Cem\u003Ehold the perspective as long as possible\u003C\u002Fem\u003E. Don't let it flip as long as possible.\u003C\u002Fp\u003E \n    \u003Cp\u003E 2. In the second round, your task is to \u003Cem\u003E flip the perspective as soon and as often\u003C\u002Fem\u003E as possible. Don't let the perspective remain, try to make it flip.\u003C\u002Fp\u003E\n\n    \u003Cp\u003E Each round will consist of 20 flips; once you indicated that the Necker cube has flipped 20 times, the round will be over.\u003C\u002Fp\u003E\n    \n    \u003Cp\u003EIn each round, your job is to hit the space key \n      as soon as and every time when your perception \n      of the cube changes.\u003C\u002Fp\u003E\n    \u003Cp\u003EIt is important to remain focused and undisturbed \n      during the whole experiment. \n      Please make sure you direct your whole attention\n      to the task at hand. Please disable distractions.\u003C\u002Fp\u003E\n\n\n    \u003Cp\u003EPlease hit \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E-Taste, if you are ready to start.\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to begin the experiment.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "Continue"
      },
      "messageHandlers": {},
      "title": "Ready for round1?",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch1 class=\"text-center\"\u003EReady for round 1?\u003C\u002Fh1\u003E\n\n    \u003Cp\u003ELet's get going with round 1.\u003C\u002Fp\u003E\n\n    \u003Cp\u003E\u003Cem\u003ETry to hold your perspective as long as possible\u003C\u002Fem\u003E.\u003C\u002Fp\u003E\n\n    \u003Cp\u003EPlease remember that your job is to hit the space key as soon as and every time when your perception of the cube changes.\u003C\u002Fp\u003E\n   \n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003ESpace\u003C\u002Fkbd\u003E to begin the experiment.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "repetition": "1"
        },
        {
          "repetition": "2"
        },
        {
          "repetition": "3"
        },
        {
          "repetition": "4"
        },
        {
          "repetition": "5"
        },
        {
          "repetition": "6"
        },
        {
          "repetition": "7"
        },
        {
          "repetition": "8"
        },
        {
          "repetition": "9"
        },
        {
          "repetition": "10"
        },
        {
          "repetition": "11"
        },
        {
          "repetition": "12"
        },
        {
          "repetition": "13"
        },
        {
          "repetition": "14"
        },
        {
          "repetition": "15"
        },
        {
          "repetition": "16"
        },
        {
          "repetition": "17"
        },
        {
          "repetition": "18"
        },
        {
          "repetition": "19"
        },
        {
          "repetition": "20"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Necker Loop - hold as long as possible",
      "sample": {
        "n": "",
        "replace": true
      },
      "files": {},
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Necker Trial",
        "files": {},
        "content": [
          {
            "type": "lab.html.Screen",
            "parameters": {},
            "responses": {
              "keypress(Space)": "Flip"
            },
            "messageHandlers": {},
            "title": "Necker show",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cfigure\u003E\n    \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fsebastiansauer\u002Fnecker-cube\u002Fmaster\u002Fimg\u002FNecker-Cube-crop.png\" \n      alt=\"Necker Cube\"     \n      width=\"300\" \n      height=\"300\"\u003E\n  \u003C\u002Ffigure\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cp class=\"font-weight-bold\"\u003EPlease focus on the cube.\u003C\u002Fp\u003E\n  \u003Cp\u003EPlease press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  as soon as your perception flips.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
            "tardy": true,
            "files": {}
          },
          {
            "type": "lab.html.Screen",
            "parameters": {},
            "responses": {},
            "messageHandlers": {},
            "title": "Inter-trial interval",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"font-size: 3.5rem\"\u003E\n    +\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cp class=\"font-weight-bold\"\u003EPlease focus on the cube.\u003C\u002Fp\u003E\n  \u003Cp\u003EPlease press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  as soon as your perception flips.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
            "timeout": "300",
            "files": {}
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Enter)": "Continue"
      },
      "messageHandlers": {},
      "title": "Ready for round2?",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch1 class=\"text-center\"\u003EReady for round 2?\u003C\u002Fh1\u003E\n \n    \u003Cp\u003ELet's get going with the next (and last) round, round 2.\u003C\u002Fp\u003E \n\n    \u003Cp\u003EThis time, \u003Cem\u003Etry to flip your perspective as quickly as possible.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\n    \u003Cp\u003EPlease remember that your job is to hit the space key as soon as and every time when your perception of the cube changes.\u003C\u002Fp\u003E\n   \n   \n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E, if you are ready to start.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "repetition": "1"
        },
        {
          "repetition": "2"
        },
        {
          "repetition": "3"
        },
        {
          "repetition": "4"
        },
        {
          "repetition": "5"
        },
        {
          "repetition": "6"
        },
        {
          "repetition": "7"
        },
        {
          "repetition": "8"
        },
        {
          "repetition": "9"
        },
        {
          "repetition": "10"
        },
        {
          "repetition": "11"
        },
        {
          "repetition": "12"
        },
        {
          "repetition": "13"
        },
        {
          "repetition": "14"
        },
        {
          "repetition": "15"
        },
        {
          "repetition": "16"
        },
        {
          "repetition": "17"
        },
        {
          "repetition": "18"
        },
        {
          "repetition": "19"
        },
        {
          "repetition": "20"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Necker Loop - flip as quickly as possible",
      "sample": {
        "n": "",
        "replace": true
      },
      "files": {},
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Necker Trial",
        "files": {},
        "content": [
          {
            "type": "lab.html.Screen",
            "parameters": {},
            "responses": {
              "keypress(Space)": "Flip"
            },
            "messageHandlers": {},
            "title": "Necker show",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cfigure\u003E\n    \u003Cimg src=\"https:\u002F\u002Fraw.githubusercontent.com\u002Fsebastiansauer\u002Fnecker-cube\u002Fmaster\u002Fimg\u002FNecker-Cube-crop.png\" \n      alt=\"Necker Cube\"     \n      width=\"300\" \n      height=\"300\"\u003E\n  \u003C\u002Ffigure\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cp class=\"font-weight-bold\"\u003EPlease focus on the cube.\u003C\u002Fp\u003E\n  \u003Cp\u003EPlease press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  as soon as your perception flips.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
            "tardy": true,
            "files": {}
          },
          {
            "type": "lab.html.Screen",
            "parameters": {},
            "responses": {},
            "messageHandlers": {},
            "title": "Inter-trial interval",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"font-size: 3.5rem\"\u003E\n    +\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  \u003Cp class=\"font-weight-bold\"\u003EPlease focus on the cube.\u003C\u002Fp\u003E\n  \u003Cp\u003EPlease press \u003Ckbd\u003Espace\u003C\u002Fkbd\u003E\n  as soon as your perception flips.\u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
            "timeout": "300",
            "files": {}
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Enter)": "Continue"
      },
      "messageHandlers": {},
      "title": "Pseudonym",
      "content": "\u003Cheader\u003E\n  \u003Ch1\u003EPersonal and study ID (optional)\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\n\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\u003Cdiv class=\"w-m text-justify\"\u003E\n\n \u003Cp\u003E If you have been asked to create a personal anonymous ID (pseudonym), \n   please enter it below. \n   Similarly, if have have been given an ID for this study, \n   please enter it in the second box.\n \u003C\u002Fp\u003E\n\n \u003Cp\u003E   \n   If you do not have that information, just skip the respective box.\n \u003C\u002Fp\u003E\n\n\n\u003Cform id=\"form\"\u003E \n    \u003C!-- The form = \"form\" part links this input to the form in the main part. By inserting \"required\", people won't be able to proceed without answering. --\u003E\n    \u003Ctable class=\"table-plain\"\u003E      \n   \n  \u003Ctr\u003E\n        \u003Cth style=\"text-align: right;\"\u003E\n          \u003Clabel for=\"pseudonym\"\u003EPlease enter your anonymous ID here:\u003C\u002Flabel\u003E \n          \u003C!-- In this case we want people to fill in a text field. We can adjust the width of the textfield by using the style-element. --\u003E\n       \u003C\u002Fth\u003E\n        \u003Ctd style=\"text-align: left;\"\u003E \n        \u003Cinput id=\"pseudonym\" name=\"pseudonym\" type=\"text\" style=\"width: 20em;\" required\u003E \n        \u003C\u002Ftd\u003E  \n  \u003C\u002Ftr\u003E\n  \u003Ctr\u003E\n    \u003Cth style=\"text-align: right;\"\u003E\n          \u003Clabel for=\"studyid\"\u003EPlease enter your study ID here:\u003C\u002Flabel\u003E \n          \u003C!-- In this case we want people to fill in a text field. We can adjust the width of the textfield by using the style-element. --\u003E\n       \u003C\u002Fth\u003E\n       \u003Ctd style=\"text-align: left;\"\u003E \n        \u003Cinput id=\"studyid\" name=\"studyid\" type=\"text\" style=\"width: 20em;\" required\u003E \n        \u003C\u002Ftd\u003E  \n      \u003C\u002Ftr\u003E  \n\u003C\u002Ftable\u003E\n\n\n\n\n\u003C\u002Fmain\u003E\n\n\u003Cfooter\u003E\n  Please press \u003Ckbd\u003EENTER\u003C\u002Fkbd\u003E to end the study.\n\u003C\u002Ffooter\u003E",
      "files": {}
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "End",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\n  \u003Cdiv\u003E\n    \u003Ch2\u003EThank you for taking part!\u003C\u002Fh2\u003E\n    The study is finished. You can close this window now.\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\n\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n\n  \u003Cdiv class=\"w-m text-justify\"\u003E\n     \u003Cp\u003EThis study is part of ongoing research activities \n      of the department of psychology at the FOM university.\n      The principal investigator is Dr. \u003Ca href=\"mailto:sebastian.sauer@fom.de\"\u003ESebastian Sauer\u003C\u002Fa\u003E. \n      Please contact him for any questions. \n      Your participation supports the research about mental processing.\n      \u003C\u002Fp\u003E\n\n    \u003Cp\u003E\n      Principal investigator: \u003Cbr\u003E\n      Dr Sebastian Sauer \u003C\u002Fbr\u003E\n      FOM university \u003Cbr\u003E\n      email: sebastian.sauer\u003Cbr\u003E\n   \u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\n",
      "files": {}
    }
  ]
})

// Let's go!
study.run()