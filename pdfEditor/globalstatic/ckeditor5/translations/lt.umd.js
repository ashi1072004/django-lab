/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

( e => {
const { [ 'lt' ]: { dictionary, getPluralForm } } = {"lt":{"dictionary":{"Words: %0":"Žodžių: %0","Characters: %0":"Simbolių: %0","Widget toolbar":"Valdiklių įrankių juosta","Insert paragraph before block":"Įkelti pastraipą prieš bloką","Insert paragraph after block":"Įkelti pastraipą po bloko","Press Enter to type after or press Shift + Enter to type before the widget":"Paspauskite Enter, jei norite rašyti po valdiklio, arba paspauskite Shift + Enter, jei norite rašyti prieš valdiklį.","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Klavišų paspaudimai, kuriuos galima naudoti pasirinkus valdiklį (pavyzdžiui, vaizdą, lentelę ir t. t.)","Insert a new paragraph directly after a widget":"Įterpti naują pastraipą iškart po valdiklio","Insert a new paragraph directly before a widget":"Įterpti naują pastraipą iškart prieš valdiklį","Move the caret to allow typing directly before a widget":"Perkelkite žymeklį, kad būtų galima rašyti iškart prieš valdiklį","Move the caret to allow typing directly after a widget":"Perkelkite žymeklį, kad būtų galima rašyti iškart po valdiklio","Move focus from an editable area back to the parent widget":"Perkelti fokusą iš redaguojamos srities atgal į pagrindinį valdiklį","Upload in progress":"Įkelima","Undo":"Atgal","Redo":"Pirmyn","Rich Text Editor":"Raiškiojo teksto redaktorius","Edit block":"Redaguoti bloką","Click to edit block":"Spustelėkite norėdami redaguoti bloką","Drag to move":"Vilkite, kad perkeltumėte","Next":"Kitas","Previous":"Buvęs","Editor toolbar":"Redaktoriaus įrankių juosta","Dropdown toolbar":"Įrankių juosta pasirenkamajame sąraše","Dropdown menu":"Išskleidžiamasis meniu","Black":"Juoda","Dim grey":"Pilkšva","Grey":"Pilka","Light grey":"Šviesiai pilka","White":"Balta","Red":"Raudona","Orange":"Oranžinė","Yellow":"Geltona","Light green":"Šviesiai žalia","Green":"Žalia","Aquamarine":"Aquamarine","Turquoise":"Turkio","Light blue":"Šviesiai mėlyna","Blue":"Mėlyna","Purple":"Violetinė","Editor block content toolbar":"Redaktoriaus bloko turinio įrankių juosta","Editor contextual toolbar":"Redaktoriaus kontekstinė įrankių juosta","HEX":"Šešioliktainė reikšmė (angl. HEX)","No results found":"Nieko nerasta","No searchable items":"Nėra paieškos elementų","Editor dialog":"Redaktoriaus dialogo langas","Close":"Uždaryti","Help Contents. To close this dialog press ESC.":"Pagalbos turinys. Norėdami uždaryti šį dialogo langą, spauskite „ESC“.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Žemiau galite rasti sparčiųjų klavišų, kuriuos galima naudoti redaktoriuje, sąrašą.","(may require <kbd>Fn</kbd>)":"(gali reikalauti <kbd>Fn</kbd>)","Accessibility":"Prieinamumas","Accessibility help":"Prieinamumo pagalba","Press %0 for help.":"Spauskite %0, norėdami gauti pagalbą.","Move focus in and out of an active dialog window":"Perkelti fokusą į ir iš aktyvaus dialogo lango","MENU_BAR_MENU_FILE":"Failas","MENU_BAR_MENU_EDIT":"Redaguoti","MENU_BAR_MENU_VIEW":"Žiūrėti","MENU_BAR_MENU_INSERT":"Įkelti","MENU_BAR_MENU_FORMAT":"Formatuoti","MENU_BAR_MENU_TOOLS":"Įrankiai","MENU_BAR_MENU_HELP":"Pagalba","MENU_BAR_MENU_TEXT":"Tekstas","MENU_BAR_MENU_FONT":"Šriftas","Editor menu bar":"Redaktoriaus meniu juosta","Please enter a valid color (e.g. \"ff0000\").":"Įveskite teisingą spalvos formatą (pvz., „ff0000“).","Styles":"Stiliai","Multiple styles":"Daug stilių","Block styles":"Blokuoti stilius","Text styles":"Teksto stiliai","Insert table":"Įterpti lentelę","Header column":"Antraštės stulpelis","Insert column left":"Įterpti stulpelį kairėje","Insert column right":"Įterpti stulpelį dešinėje","Delete column":"Ištrinti stulpelį","Select column":"Pasirinkti stulpelį","Column":"Stulpelis","Header row":"Antraštės eilutė","Insert row below":"Įterpti eilutę žemiau","Insert row above":"Įterpti eilutę aukščiau","Delete row":"Ištrinti eilutę","Select row":"Pasirinkti eilutę","Row":"Eilutė","Merge cell up":"Prijungti langelį viršuje","Merge cell right":"Prijungti langelį dešinėje","Merge cell down":"Prijungti langelį apačioje","Merge cell left":"Prijungti langelį kairėje","Split cell vertically":"Padalinti langelį vertikaliai","Split cell horizontally":"Padalinti langelį horizontaliai","Merge cells":"Sujungti langelius","Table toolbar":"Lentelės įrankių juosta","Table properties":"Lentelės savybės","Cell properties":"Langelio savybės","Border":"Kraštas","Style":"Stilius","Width":"Plotis","Height":"Aukštis","Color":"Spalva","Background":"Fonas","Padding":"Užpildymas","Dimensions":"Matmenys","Table cell text alignment":"Lentelės langelio teksto lygiavimas","Alignment":"Lygiavimas","Horizontal text alignment toolbar":"Horizontalaus teksto lygiavimo įrankių juosta","Vertical text alignment toolbar":"Vertikalaus teksto lygiavimo įrankių juosta","Table alignment toolbar":"Teksto lygiavimo įrankių juosta","None":"Nieko","Solid":"Vientisas","Dotted":"Taškuotas","Dashed":"Brūkšneliais","Double":"Dvigubas","Groove":"Ilgas ir siauras","Ridge":"Briaunuotas","Inset":"Intarpas","Outset":"Pradžia","Align cell text to the left":"Lygiuoti langelio tekstą kairėje","Align cell text to the center":"Lygiuoti langelio tekstą centre","Align cell text to the right":"Lygiuoti langelio tekstą dešinėje","Justify cell text":"Pabrėžti langelio tekstą","Align cell text to the top":"Lygiuoti langelio tekstą viršuje","Align cell text to the middle":"Lygiuoti langelio tekstą viduryje","Align cell text to the bottom":"Lygiuoti langelio tekstą apačioje","Align table to the left":"Lygiuoti lentelę kairėje","Center table":"Centruoti lentelę","Align table to the right":"Lygiuoti lentelę dešinėje","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Spalva neteisinga. Mėginkite \"#FF0000\" arba \"rgb(255,0,0)\" arba \"raudona\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Reikšmė neteisinga. Mėginkite \"10px\" arba \"2em\", ar paprasčiausiai \"2\".","Enter table caption":"Įvesti lentelės antraštę","Keystrokes that can be used in a table cell":"Klavišų paspaudimai, kurie gali būti naudojami lentelės langelyje","Move the selection to the next cell":"Perkelti pasirinkimą į kitą langelį","Move the selection to the previous cell":"Perkelti pasirinkimą į ankstesnį langelį","Insert a new table row (when in the last cell of a table)":"Įterpti į lentelę naują eilutę (kai yra paskutiniame lentelės langelyje)","Navigate through the table":"Naršyti po lentelę","Table":"Lentelė","Special characters":"Išskirtiniai simboliai","Category":"Kategorija","All":"Visi","Arrows":"Rodyklės","Currency":"Valiuta","Latin":"Lotyniški rašmenys","Mathematical":"Matematiniai rašmenys","Text":"Tekstas","leftwards simple arrow":"Į kairę paprasta rodyklė","rightwards simple arrow":"Į dešinę paprasta rodyklė","upwards simple arrow":"Į viršų paprasta rodyklė","downwards simple arrow":"Į apačią paprasta rodyklė","leftwards double arrow":"dviguba rodyklė kairėn","rightwards double arrow":"dviguba rodyklė dešinėn","upwards double arrow":"dviguba rodyklė aukštyn","downwards double arrow":"dviguba rodyklė žemyn","leftwards dashed arrow":"punktyrinė rodyklė kairėn","rightwards dashed arrow":"punktyrinė rodyklė dešinėn","upwards dashed arrow":"punktyrinė rodyklė aukštyn","downwards dashed arrow":"punktyrinė rodyklė žemyn","leftwards arrow to bar":"rodyklė į kairę juostą","rightwards arrow to bar":"rodyklė į dešinę juostą","upwards arrow to bar":"rodyklė į juostą aukštyn","downwards arrow to bar":"rodyklė į juostą žemyn","up down arrow with base":"rodyklė aukštyn žemyn su pagrindu","back with leftwards arrow above":"atgal su rodykle kairėn viršuje","end with leftwards arrow above":"pabaiga su rodykle kairėn viršuje","on with exclamation mark with left right arrow above":"įjungta su šauktuku su rodykle kairėn dešinėn viršuje","soon with rightwards arrow above":"netrukus su rodykle dešinėn viršuje","top with upwards arrow above":"viršus su rodykle aukštyn viršuje","Dollar sign":"Dolerio ženklas","Euro sign":"Euro ženklas","Yen sign":"Jenos ženklas","Pound sign":"Svaro ženklas","Cent sign":"Cento ženklas","Euro-currency sign":"Euro valiutos ženklas","Colon sign":"Dvitaškio ženklas","Cruzeiro sign":"Cruzeiro ženklas","French franc sign":"Prancūzų franko ženklas","Lira sign":"Liros ženklas","Currency sign":"Valiutos ženklas","Bitcoin sign":"Bitkoino ženklas","Mill sign":"Malūno ženklas","Naira sign":"Nairos ženklas","Peseta sign":"Pesetos ženklas","Rupee sign":"Rupijos ženklas","Won sign":"Vonos ženklas","New sheqel sign":"Naujojo šekelio ženklas","Dong sign":"Dongo ženklas","Kip sign":"Kipo ženklas","Tugrik sign":"Tugriko ženklas","Drachma sign":"Drachmos ženklas","German penny sign":"Vokietijos cento ženklas","Peso sign":"Peso ženklas","Guarani sign":"Guaranos ženklas","Austral sign":"Australo ženklas","Hryvnia sign":"Grivinos ženklas","Cedi sign":"Cedi ženklas","Livre tournois sign":"Livre tournois ženklas","Spesmilo sign":"Spesmilo ženklas","Tenge sign":"Tengės ženklas","Indian rupee sign":"Indijos rupijos ženklas","Turkish lira sign":"Turkijos liros ženklas","Nordic mark sign":"Šiaurietiškas ženklas","Manat sign":"Manatos ženklas","Ruble sign":"Rublio ženklas","Latin capital letter a with macron":"Lotynų didžioji raidė a su makronu","Latin small letter a with macron":"Lotynų mažoji raidė a su makronu","Latin capital letter a with breve":"Lotynų didžioji raidė a su lankeliu","Latin small letter a with breve":"Lotynų mažoji raidė a su lankeliu","Latin capital letter a with ogonek":"Lotynų didžioji raidė a su nosine","Latin small letter a with ogonek":"Lotynų mažoji raidė a su nosine","Latin capital letter c with acute":"Lotynų didžioji raidė c su dešininiu kirčiu","Latin small letter c with acute":"Lotynų mažoji raidė c su dešininiu kirčiu","Latin capital letter c with circumflex":"Lotynų didžioji raidė c su cirkumfleksu","Latin small letter c with circumflex":"Lotynų mažoji raidė c su cirkumfleksu","Latin capital letter c with dot above":"Lotynų didžioji raidė c su tašku viršuje","Latin small letter c with dot above":"Lotynų mažoji raidė c su tašku viršuje","Latin capital letter c with caron":"Lotynų didžioji raidė c su paukščiuku","Latin small letter c with caron":"Lotynų mažoji raidė c su paukščiuku","Latin capital letter d with caron":"Lotynų didžioji raidė d su paukščiuku","Latin small letter d with caron":"Lotynų mažoji raidė d su paukščiuku","Latin capital letter d with stroke":"Lotynų didžioji raidė d su pasviruoju brūkšneliu","Latin small letter d with stroke":"Lotynų mažoji raidė d su pasviruoju brūkšneliu","Latin capital letter e with macron":"Lotynų didžioji raidė e su makronu","Latin small letter e with macron":"Lotynų mažoji raidė e su makronu","Latin capital letter e with breve":"Lotynų didžioji raidė e su lankeliu","Latin small letter e with breve":"Lotynų mažoji raidė e su lankeliu","Latin capital letter e with dot above":"Lotynų didžioji raidė e su tašku viršuje","Latin small letter e with dot above":"Lotynų mažoji raidė e su tašku viršuje","Latin capital letter e with ogonek":"Lotynų didžioji raidė e su nosine","Latin small letter e with ogonek":"Lotynų mažoji raidė e su nosine","Latin capital letter e with caron":"Lotynų didžioji raidė e su paukščiuku","Latin small letter e with caron":"Lotynų didžioji raidė e su paukščiuku","Latin capital letter g with circumflex":"Lotynų didžioji raidė g su cirkumfleksu","Latin small letter g with circumflex":"Lotynų mažoji raidė g su cirkumfleksu","Latin capital letter g with breve":"Lotynų didžioji raidė g su lankeliu","Latin small letter g with breve":"Lotynų mažoji raidė g su lankeliu","Latin capital letter g with dot above":"Lotynų didžioji raidė g su tašku viršuje","Latin small letter g with dot above":"Lotynų mažoji raidė g su tašku viršuje","Latin capital letter g with cedilla":"Lotynų didžioji raidė g su sedile","Latin small letter g with cedilla":"Lotynų mažoji raidė g su sedile","Latin capital letter h with circumflex":"Lotynų didžioji raidė h su cirkumfleksu","Latin small letter h with circumflex":"Lotynų mažoji raidė h su cirkumfleksu","Latin capital letter h with stroke":"Lotynų didžioji raidė h su pasviruoju brūkšneliu","Latin small letter h with stroke":"Lotynų mažoji raidė h su pasviruoju brūkšneliu","Latin capital letter i with tilde":"Lotynų didžioji raidė i su riestiniu kirčiu","Latin small letter i with tilde":"Lotynų mažoji raidė i su riestiniu kirčiu","Latin capital letter i with macron":"Lotynų didžioji raidė i su makronu","Latin small letter i with macron":"Lotynų mažoji raidė i su makronu","Latin capital letter i with breve":"Lotynų didžioji raidė i su lankeliu","Latin small letter i with breve":"Lotynų mažoji raidė i su lankeliu","Latin capital letter i with ogonek":"Lotynų didžioji raidė i su nosine","Latin small letter i with ogonek":"Lotynų mažoji raidė i su nosine","Latin capital letter i with dot above":"Lotynų didžioji raidė i su tašku viršuje","Latin small letter dotless i":"Lotynų mažoji raidė i be taškų","Latin capital ligature ij":"Lotynų didžioji ligatūra ij","Latin small ligature ij":"Lotynų mažoji ligatūra ij","Latin capital letter j with circumflex":"Lotynų didžioji raidė j su cirkumfleksu","Latin small letter j with circumflex":"Lotynų mažoji raidė j su cirkumfleksu","Latin capital letter k with cedilla":"Lotynų didžioji raidė k su sedile","Latin small letter k with cedilla":"Lotynų mažoji raidė k su sedile","Latin small letter kra":"Lotynų mažoji raidė kra","Latin capital letter l with acute":"Lotynų didžioji raidė l su dešininiu kirčiu","Latin small letter l with acute":"Lotynų mažoji raidė l su dešininiu kirčiu","Latin capital letter l with cedilla":"Lotynų didžioji raidė l su sedile","Latin small letter l with cedilla":"Lotynų mažoji raidė l su sedile","Latin capital letter l with caron":"Lotynų didžioji raidė l su paukščiuku","Latin small letter l with caron":"Lotynų mažoji raidė l su paukščiuku","Latin capital letter l with middle dot":"Lotynų didžioji raidė l su tašku viduryje","Latin small letter l with middle dot":"Lotynų mažoji raidė l su tašku viduryje","Latin capital letter l with stroke":"Lotynų didžioji raidė l su pasviruoju brūkšneliu","Latin small letter l with stroke":"Lotynų mažoji raidė l su pasviruoju brūkšneliu","Latin capital letter n with acute":"Lotynų didžioji raidė n su dešininiu kirčiu","Latin small letter n with acute":"Lotynų mažoji raidė n su dešininiu kirčiu","Latin capital letter n with cedilla":"Lotynų didžioji raidė n su sedile","Latin small letter n with cedilla":"Lotynų mažoji raidė n su sedile","Latin capital letter n with caron":"Lotynų didžioji raidė n su paukščiuku","Latin small letter n with caron":"Lotynų mažoji raidė n su paukščiuku","Latin small letter n preceded by apostrophe":"Lotynų mažoji raidė n su apostrofu priešais","Latin capital letter eng":"Lotynų didžioji raidė eng","Latin small letter eng":"Lotynų mažoji raidė eng","Latin capital letter o with macron":"Lotynų didžioji raidė o su makronu","Latin small letter o with macron":"Lotynų mažoji raidė o su makronu","Latin capital letter o with breve":"Lotynų didžioji raidė o su lankeliu","Latin small letter o with breve":"Lotynų mažoji raidė o su lankeliu","Latin capital letter o with double acute":"Lotynų didžioji raidė o su dvigubu dešininiu kirčiu","Latin small letter o with double acute":"Lotynų mažoji raidė o su dvigubu dešininiu kirčiu","Latin capital ligature oe":"Lotynų didžioji ligatūra oe","Latin small ligature oe":"Lotynų mažoji ligatūra oe","Latin capital letter r with acute":"Lotynų didžioji raidė r su dešininiu kirčiu","Latin small letter r with acute":"Lotynų mažoji raidė r su dešininiu kirčiu","Latin capital letter r with cedilla":"Lotynų didžioji raidė r su sedile","Latin small letter r with cedilla":"Lotynų mažoji raidė r su sedile","Latin capital letter r with caron":"Lotynų didžioji raidė r su paukščiuku","Latin small letter r with caron":"Lotynų mažoji raidė r su paukščiuku","Latin capital letter s with acute":"Lotynų didžioji raidė s su dešininiu kirčiu","Latin small letter s with acute":"Lotynų mažoji raidė s su dešininiu kirčiu","Latin capital letter s with circumflex":"Lotynų didžioji raidė s su cirkumfleksu","Latin small letter s with circumflex":"Lotynų mažoji raidė s su cirkumfleksu","Latin capital letter s with cedilla":"Lotynų didžioji raidė s su sedile","Latin small letter s with cedilla":"Lotynų mažoji raidė s su sedile","Latin capital letter s with caron":"Lotynų didžioji raidė s su paukščiuku","Latin small letter s with caron":"Lotynų mažoji raidė s su paukščiuku","Latin capital letter t with cedilla":"Lotynų didžioji raidė t su sedile","Latin small letter t with cedilla":"Lotynų mažoji raidė t su sedile","Latin capital letter t with caron":"Lotynų didžioji raidė t su paukščiuku","Latin small letter t with caron":"Lotynų mažoji raidė t su paukščiuku","Latin capital letter t with stroke":"Lotynų didžioji raidė t su pasviruoju brūkšneliu","Latin small letter t with stroke":"Lotynų mažoji raidė t su pasviruoju brūkšneliu","Latin capital letter u with tilde":"Lotynų didžioji raidė u su riestiniu kirčiu","Latin small letter u with tilde":"Lotynų mažoji raidė u su riestiniu kirčiu","Latin capital letter u with macron":"Lotynų didžioji raidė u su makronu","Latin small letter u with macron":"Lotynų mažoji raidė u su makronu","Latin capital letter u with breve":"Lotynų didžioji raidė u su lankeliu","Latin small letter u with breve":"Lotynų mažoji raidė u su lankeliu","Latin capital letter u with ring above":"Lotynų didžioji raidė u su žiedu viršuje","Latin small letter u with ring above":"Lotynų mažoji raidė u su žiedu viršuje","Latin capital letter u with double acute":"Lotynų didžioji raidė u su dvigubu dešininiu kirčiu","Latin small letter u with double acute":"Lotynų mažoji raidė u su dvigubu dešininiu kirčiu","Latin capital letter u with ogonek":"Lotynų didžioji raidė u su nosine","Latin small letter u with ogonek":"Lotynų mažoji raidė u su nosine","Latin capital letter w with circumflex":"Lotynų didžioji raidė w su cirkumfleksu","Latin small letter w with circumflex":"Lotynų mažoji raidė w su cirkumfleksu","Latin capital letter y with circumflex":"Lotynų didžioji raidė y su cirkumfleksu","Latin small letter y with circumflex":"Lotynų mažoji raidė y su cirkumfleksu","Latin capital letter y with diaeresis":"Lotynų didžioji raidė y su diaereze","Latin capital letter z with acute":"Lotynų didžioji raidė z su dešininiu kirčiu","Latin small letter z with acute":"Lotynų mažoji raidė z su dešininiu kirčiu","Latin capital letter z with dot above":"Lotynų didžioji raidė z su tašku viršuje","Latin small letter z with dot above":"Lotynų mažoji raidė z su tašku viršuje","Latin capital letter z with caron":"Lotynų didžioji raidė z su paukščiuku","Latin small letter z with caron":"Lotynų mažoji raidė z su paukščiuku","Latin small letter long s":"Lotynų mažoji ilga raidė s","Less-than sign":"Mažiau nei ženklas","Greater-than sign":"Daugiau nei ženklas","Less-than or equal to":"Mažiau nei arba lygu ","Greater-than or equal to":"Daugiau nei arba lygu","En dash":"Brūkšnelis","Em dash":"Brūkšnys","Macron":"Makronas","Overline":"Viršutinė juosta","Degree sign":"Laipsnio ženklas","Minus sign":"Minuso ženklas","Plus-minus sign":"Pliuso-minuso ženklas","Division sign":"Dalybos ženklas","Fraction slash":"Trupmeninis pasvirasis brūkšnys","Multiplication sign":"Daugybos ženklas","Latin small letter f with hook":"Lotynų mažoji raidė f su kabliuku","Integral":"Integralas","N-ary summation":"Sigma sumavimas","Infinity":"Begalybė","Square root":"Kvadratinė šaknis","Tilde operator":"Ekvivalentas","Approximately equal to":"Apytiksliai lygu","Almost equal to":"Beveik lygu","Not equal to":"Nelygu","Identical to":"Identiškas","Element of":"Narys","Not an element of":"Ne narys","Contains as member":"Skaitosi kaip narys","N-ary product":"Dekarto produktas","Logical and":"Konjunkcija","Logical or":"Disjunkcija","Not sign":"Neigimas","Intersection":"Sankirta","Union":"Sąjunga","Partial differential":"Dalinė išvestinė","For all":"Bendrumo kvantorius","There exists":"Egzistavimo kvantorius","Empty set":"Nulinė reikšmė","Nabla":"Nabla","Asterisk operator":"Žvaigždutė","Proportional to":"Proporcingas","Angle":"Kampas","Vulgar fraction one quarter":"Paprastoji trupmena one ketvirtadalis","Vulgar fraction one half":"Paprastoji trupmena one antroji","Vulgar fraction three quarters":"Paprastoji trupmena three ketvirtadaliai","Single left-pointing angle quotation mark":"Vienguba kairėn nukreipto kampo kabutė","Single right-pointing angle quotation mark":"Vienguba dešinėn nukreipto kampo kabutė","Left-pointing double angle quotation mark":"Kairėn nukreipto kampo dviguba kabutė","Right-pointing double angle quotation mark":"Dešinėn nukreipto kampo dviguba kabutė","Left single quotation mark":"Vienguba kairė kabutė","Right single quotation mark":"Vienguba dešinė kabutė","Left double quotation mark":"Kairė dviguba kabutė","Right double quotation mark":"Dešinė dviguba kabutė","Single low-9 quotation mark":"Vienguba žema „9“ kabutė","Double low-9 quotation mark":"Dviguba žema „9“ kabutė","Inverted exclamation mark":"Apverstas šauktukas","Inverted question mark":"Apverstas klaustukas","Two dot leader":"Two taškų linijos","Horizontal ellipsis":"Horizontali elipsė","Double dagger":"Dvigubo kryžiaus ženklas","Per mille sign":"Promilės ženklas","Per ten thousand sign":"Ten tūkstančių ženklas","Double exclamation mark":"Dvigubas šauktukas","Question exclamation mark":"Klaustukas šauktukas","Exclamation question mark":"Šauktukas klaustukas","Double question mark":"Dvigubas klaustukas","Copyright sign":"Autorinių teisių simbolis","Registered sign":"Registruoto prekės ženklo simbolis","Trade mark sign":"Prekės ženklo simbolis","Section sign":"Skirsnio ženklas","Paragraph sign":"Pastraipos ženklas","Reversed paragraph sign":"Apverstas pastraipos ženklas","Show source":"Rodyti šaltinį","Show blocks":"Rodyti blokus","Select all":"Pasirinkti viską","Disable editing":"Išjungti redagavimą","Enable editing":"Įjungti redagavimą","Previous editable region":"Buvusi redaguojama sritis","Next editable region":"Sekanti redaguojama sritis","Navigate editable regions":"Naviguoti tarp redaguojamų sričių","Remove Format":"Naikinti formatavimą","Page break":"Puslapio lūžis","media widget":"media valdiklis","Media URL":"Media URL","Paste the media URL in the input.":"Įklijuokite media URL adresą į įvedimo lauką.","Tip: Paste the URL into the content to embed faster.":"Patarimas: norėdami greičiau įterpti media tiesiog įklijuokite URL į turinį.","The URL must not be empty.":"URL negali būti tuščias.","This media URL is not supported.":"Šis media URL yra nepalaikomas.","Insert media":"Įterpkite media","Media":"Medija","Media toolbar":"Medijų įrankių juosta","Open media in new tab":"Atidaryti mediją naujame skirtuke","Numbered List":"Numeruotas rąrašas","Bulleted List":"Sąrašas","To-do List":"Užduočių sąrašas","Bulleted list styles toolbar":"Ženklinto sąrašo stilių įrankių juosta","Numbered list styles toolbar":"Numeruoto sąrašo stilių įrankių juosta","Toggle the disc list style":"Perjungti diskinį sąrašo stilių","Toggle the circle list style":"Perjungti ovalų sąrašo stilių","Toggle the square list style":"Perjungti kvadratinį sąrašo stilių","Toggle the decimal list style":"Perjungti dešimtainį sąrašo stilių","Toggle the decimal with leading zero list style":"Perjungti dešimtainį sąrašo su nuliu priekyje stilių","Toggle the lower–roman list style":"Perjungti žemesnįjį romėniško stiliaus sąrašą","Toggle the upper–roman list style":"Perjungti aukštesnįjį romėniško stiliaus sąrašą","Toggle the lower–latin list style":"Perjungti žemesnįjį lotyniško stiliaus sąrašą","Toggle the upper–latin list style":"Perjungti aukštesnįjį lotyniško stiliaus sąrašą","Disc":"Diskas","Circle":"Apskritimas","Square":"Kvadratas","Decimal":"Dešimtainis","Decimal with leading zero":"Dešimtainis su nuliu priekyje","Lower–roman":"žemesnysis-romėniškas","Upper-roman":"Viršutinis romėniškas","Lower-latin":"žemesnysis-lotyniškas","Upper-latin":"Viršutinis romėniškas","List properties":"Vardyti ypatybes","Start at":"Pradėti nuo","Invalid start index value.":"Netinkama pradžios indekso vertė.","Start index must be greater than 0.":"Pradžios indeksas turi būti didesnis nei 0.","Reversed order":"Atvirkštinė tvarka","Keystrokes that can be used in a list":"Sąraše galimi naudoti klavišų paspaudimai","Increase list item indent":"Padidinti sąrašo elemento įtrauką","Decrease list item indent":"Sumažinti sąrašo elemento įtrauką","Entering a to-do list":"Įvesti darbų sąrašą","Leaving a to-do list":"Palikti darbų sąrašą","Unlink":"Pašalinti nuorodą","Link":"Pridėti nuorodą","Link URL":"Nuorodos URL","Link URL must not be empty.":"Nuorodos URL negali būti tuščias.","Link image":"Susieti paveikslėlį","Edit link":"Keisti nuorodą","Open link in new tab":"Atidaryti nuorodą naujame skirtuke","This link has no URL":"Ši nuorda neturi URL","Open in a new tab":"Atverti naujoje kortelėje","Downloadable":"Parsisiunčiamas","Create link":"Sukurti nuorodą","Move out of a link":"Išeiti iš nuorodos","Scroll to target":"Slinkti iki paskirties vietos","Language":"Kalba","Choose language":"Pasirinkti kalbą","Remove language":"Pašalinti kalbą","Increase indent":"Padidinti atitraukimą","Decrease indent":"Sumažinti atitraukimą","image widget":"vaizdų valdiklis","Wrap text":"Perkelti tekstą į kitą eilutę","Break text":"Suskaidyti tekstą","In line":"tolygiai","Side image":"Vaizdas šone","Full size image":"Pilno dydžio vaizdas","Left aligned image":"Vaizdas kairėje","Centered image":"Vaizdas centre","Right aligned image":"Vaizdas dešinėje","Change image text alternative":"Pakeisti vaizdo alternatyvųjį tekstą","Text alternative":"Alternatyvusis tekstas","Enter image caption":"Įveskite vaizdo antraštę","Insert image":"Įterpti vaizdą","Replace image":"Pakeisti vaizdą","Upload from computer":"Įkelti iš kompiuterio","Replace from computer":"Pakeisti iš kompiuterio","Upload image from computer":"Įkelti paveiksliuką iš kompiuterio","Image from computer":"Įkelti vaizdą iš kompiuterio","From computer":"Iš kompiuterio","Replace image from computer":"Pakeisti paveiksliuką iš kompiuterio","Upload failed":"Įkelti nepavyko","You have no image upload permissions.":"Jūs neturite leidimo nuotraukoms įkelti.","Image toolbar":"Paveikslėlių įrankių juosta","Resize image":"Pakeisti paveikslėlio dydį","Resize image to %0":"Pakeisti paveikslėlio dydį į %0","Resize image to the original size":"Pakeisti paveikslėlio dydį į originalų","Resize image (in %0)":"Pakeisti vaizdo dydį (%0)","Original":"Originalus","Custom image size":"Tinkinti vaizdo dydį","Custom":"Tinkinti","Image resize list":"Paveikslėlio dydžio keitimo sąrašas","Insert image via URL":"Įkelti paveikslėlį naudojant URL","Insert via URL":"Įterpti naudojant URL","Image via URL":"Vaizdas naudojant URL","Via URL":"Naudojant URL","Update image URL":"Atnaujinti paveikslėlio URL","Caption for the image":"Vaizdo antraštė","Caption for image: %0":"Vaizdo antraštė: %0","The value must not be empty.":"Reikšmės laukelis negali būti tuščias.","The value should be a plain number.":"Reikšmė turi būti sveikasis skaičius.","Uploading image":"Įkeliamas vaizdas","Image upload complete":"Užbaigtas vaizdo įkėlimas","Error during image upload":"Įkeliant vaizdą, įvyko klaida","Image":"Vaizdas","HTML object":"HTML object","Insert HTML":"Įkelti HTML","HTML snippet":"HTML iškarpa","Paste raw HTML here...":"Įklijuokite neapdorotą HTML čia...","Edit source":"Redaguoti šaltinį","Save changes":"Išsaugoti pakeitimus","No preview available":"Nėra galimų peržiūrų","Empty snippet content":"Tuščias iškarpos turinys","Horizontal line":"Horizontali linija","Yellow marker":"Geltonas žymeklis","Green marker":"Žalias žymeklis","Pink marker":"Rožinis žymeklis","Blue marker":"Mėlynas žymeklis","Red pen":"Raudonas žymeklis","Green pen":"Žalias žymeklis","Remove highlight":"Panaikinti pažymėjimą","Highlight":"Pažymėti žymekliu","Text highlight toolbar":"Teksto paryškinimo įrankių juosta","Heading":"Antraštė","Choose heading":"Pasirinkite antraštę","Heading 1":"Antraštė 1","Heading 2":"Antraštė 2","Heading 3":"Antraštė 3","Heading 4":"Antraštė 4","Heading 5":"Antraštė 5","Heading 6":"Antraštė 6","Type your title":"Įveskite savo pavadinimą","Type or paste your content here.":"Rašykite ar įkopijuokite turinį čia.","Font Size":"Šrifto dydis","Tiny":"Mažytis","Small":"Mažas","Big":"Didelis","Huge":"Milžiniškas","Font Family":"Šrifto šeima","Default":"Numatyta","Font Color":"Šrifto spalva","Font Background Color":"Šrifto fono spalva","Document colors":"Dokumento spalvos","Find and replace":"Rasti ir pakeisti","Find in text…":"Surasti tekste...","Find":"Surasti","Previous result":"Buvęs rezultatas","Next result":"Kitas rezultatas","Replace":"Pakeisti","Replace all":"Pakeisti visus","Match case":"Sutapties atvejis","Whole words only":"Tik vientisus žodžius","Replace with…":"Sukeisti su...","Text to find must not be empty.":"Ieškomas tekstas negali būti tuščias.","Tip: Find some text first in order to replace it.":"Patarimas: Pirmiausiai suraskite teksto, jog jį sukeistumėte.","Advanced options":"Išplėstinės pasirinktys","Find in the document":"Ieškoti dokumente","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Įterpti eilutės lūžį (<code>&lt;br&gt;</code> elementas)","Insert a hard break (a new paragraph)":"Įterpti naują pastraipą","Emoji":"Jaustukas","Show all emoji...":"Rodyti visus jaustukus...","Find an emoji (min. 2 characters)":"Rasti jaustuką (mažiausiai 2 ženklai)","No emojis were found matching \"%0\".":"Nerastas nė vienas jaustukas, atitinkantis \"[%0]\".","Keep on typing to see the emoji.":"Kad pamatytumėte jaustuką, toliau rinkite tekstą.","The query must contain at least two characters.":"Užklausoje turi būti bent 2 simboliai.","Smileys & Expressions":"Šypsenos ir išraiškos","Gestures & People":"Ženklai ir žmonės","Animals & Nature":"Gyvūnai ir gamta","Food & Drinks":"Maistas ir gėrimai","Travel & Places":"Kelionės ir vietos","Activities":"Veiklos","Objects":"Objektai","Symbols":"Simboliai","Flags":"Vėliavėlės","Select skin tone":"Pasirinkti spalvos toną","Default skin tone":"Numatytasis spalvos tonas","Light skin tone":"Šviesus spalvos tonas","Medium Light skin tone":"Vidutiniškai šviesus spalvos tonas","Medium skin tone":"Vidutinis spalvos tonas","Medium Dark skin tone":"Vidutiniškai tamsus spalvos tonas","Dark skin tone":"Tamsus spalvos tonas","Cancel":"Atšaukti","Clear":"Išvalyti","Remove color":"Pašalinti spalvą","Restore default":"Atkurti numatytuosius","Save":"Išsaugoti","Show more items":"Rodyti daugiau elementų","%0 of %1":"%0 iš %1","Cannot upload file:":"Negalima įkelti failo:","Rich Text Editor. Editing area: %0":"Raiškiojo teksto redaktorius. Redagavimo sritis: %0","Insert with file manager":"Įterpti naudojant failų tvarkyklę","Replace with file manager":"Pakeisti failų tvarkykle","Insert image with file manager":"Įterpti paveikslėlį naudojant failų tvarkyklę","Replace image with file manager":"Pakeisti paveikslėlį failų tvarkytuve","File":"Failas","With file manager":"Naudojant failų tvarkyklę","Toggle caption off":"Išjungti antraštę","Toggle caption on":"Įjungti antraštę","Content editing keystrokes":"Turinio redagavimo klavišų paspaudimai","These keyboard shortcuts allow for quick access to content editing features.":"Šie spartieji klavišai leidžia greitai pasiekti turinio redagavimo funkcijas.","User interface and content navigation keystrokes":"Naudotojo sąsajos ir turinio navigacijos klavišų paspaudimai","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Norėdami efektyviau naršyti po „CKEditor 5“ naudotojo sąsają, naudokite toliau nurodytus klavišų paspaudimus.","Close contextual balloons, dropdowns, and dialogs":"Uždaryti kontekstinius pranešimus, išskleidžiamuosius meniu ir dialogo langus","Open the accessibility help dialog":"Atidaryti prieinamumo pagalbos dialogo langą","Move focus between form fields (inputs, buttons, etc.)":"Perkelti fokusą tarp formos laukų (įvesčių, klavišų ir t. t.)","Move focus to the menu bar, navigate between menu bars":"Perkelti žymeklį į meniu juostą, naršyti tarp meniu juostų","Move focus to the toolbar, navigate between toolbars":"Perkelti fokusą į įrankių juostą, naršyti tarp įrankių juostų","Navigate through the toolbar or menu bar":"Naršykite po įrankių juostą arba meniu juostą","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Vykdyti šiuo metu sufokusuotą mygtuką. Vykdant su redaktoriaus turiniu sąveikaujančius mygtukus, fokusas yra perkeliamas atgal į turinį.","Accept":"Priimti","Paragraph":"Paragrafas","Color picker":"Spalvos ieškiklis","Please try a different phrase or check the spelling.":"Išbandykite kitą frazę arba patikrinkite rašybą.","Source":"Šaltinis","Insert code block":"Įterpti codų bloką","Plain text":"Paprastasis tekstas","Leaving %0 code snippet":"Paliekama %0 kodo iškarpa","Entering %0 code snippet":"Įvedama %0 kodo iškarpa","Entering code snippet":"Įvedama kodo iškarpa","Leaving code snippet":"Paliekama kodo iškarpa","Code block":"Kodų blokas","Copy selected content":"Kopijuoti pasirinktą turinį","Paste content":"Įklijuoti turinį","Paste content as plain text":"Įklijuoti turinį kaip paprastą tekstą","Insert image or file":"Įterpti vaizdą ar failą","Could not obtain resized image URL.":"Nepavyko gauti pakeisto dydžio paveiksliuko URL.","Selecting resized image failed":"Nepavyko pasirinkti pakeisto vaizdo","Could not insert image at the current position.":"Nepavyko įterpti vaizdo į dabartinę vietą.","Inserting image failed":"Nepavyko įterpti vaizdo","Open file manager":"Atidaryti failų tvarkyklę","Cannot determine a category for the uploaded file.":"Negalima apibrėžti įkelto failo kategorijos.","Cannot access default workspace.":"Negalima pasiekti numatytosios darbo erdvės.","You have no image editing permissions.":"Jūs neturite leidimo nuotraukoms redaguoti.","Edit image":"Redaguoti paveikslėlį","Processing the edited image.":"Redaguojamo paveikslėlio apdorojimas.","Server failed to process the image.":"Serveriui nepavyko apdoroti paveikslėlio.","Failed to determine category of edited image.":"Nepavyko nustatyti redaguojamo paveikslėlio kategorijos.","Bookmark":"Adresyno įrašas","Insert":"Įkelti","Update":"Atnaujinti","Edit bookmark":"Redaguoti adresyno įrašą","Remove bookmark":"Pašalinti adresyno įrašą","Bookmark name":"Adresyno įrašo pavadinimas","Enter the bookmark name without spaces.":"Įveskite adresyno įrašo pavadinimą be tarpų.","Bookmark must not be empty.":"Adresyno įrašas negali būti tuščias.","Bookmark name cannot contain space characters.":"Adresyno įrašo pavadinimas negali turėti specialiųjų ženklų.","Bookmark name already exists.":"Toks adresyno įrašo pavadinimas jau yra naudojamas.","bookmark widget":"adresyno įrašo valdiklis","Block quote":"Citata","Bold":"Paryškintas","Italic":"Kursyvas","Underline":"Pabrauktas","Code":"Kodas","Strikethrough":"Perbrauktas","Subscript":"Žemiau","Superscript":"Aukščiau","Italic text":"Rašyti tekstą kursyvu","Move out of an inline code style":"Perėjimas iš įterptojo kodo stiliaus","Bold text":"Pajuodinti tekstą","Underline text":"Pabraukti tekstą","Strikethrough text":"Perbraukti tekstą","Saving changes":"Pakeitimai saugomi","Revert autoformatting action":"Sugrąžinti automatinio formatavimo veiksmą","Align left":"Lygiuoti į kairę","Align right":"Lygiuoti į dešinę","Align center":"Centruoti","Justify":"Lygiuoti per visą plotį","Text alignment":"Teksto lygiavimas","Text alignment toolbar":"Teksto lygiavimo įrankių juosta"},getPluralForm(n){return (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);}}};
e[ 'lt' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'lt' ].dictionary = Object.assign( e[ 'lt' ].dictionary, dictionary );
e[ 'lt' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
