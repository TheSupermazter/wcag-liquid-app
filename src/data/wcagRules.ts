export type WCAGLevel = 'A' | 'AA' | 'AAA';
export type WCAGRole = 'Design' | 'Develop' | 'Content';

export interface WCAGRule {
    id: string;
    refId: string; // e.g. "1.1.1"
    level: WCAGLevel;
    roles: WCAGRole[];
    title: {
        en: string;
        nl: string;
    };
    description: {
        original: {
            en: string;
            nl: string;
        };
        easy: {
            en: string;
            nl: string;
        };
    };
    url: string;
}

export const wcagRules: WCAGRule[] = [
    // Principle 1: Perceivable
    {
        id: 'non-text-content',
        refId: '1.1.1',
        level: 'A',
        roles: ['Content', 'Develop', 'Design'],
        title: { en: 'Non-text Content', nl: 'Niet-tekstuele content' },
        description: {
            original: {
                en: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.',
                nl: 'Alle niet-tekstuele content die aan de gebruiker wordt gepresenteerd, heeft een tekstalternatief dat een gelijkwaardig doel dient.'
            },
            easy: {
                en: 'Images, icons, and buttons must have a text description (alt text) so screen readers can explain them.',
                nl: 'Afbeeldingen, iconen en knoppen moeten een tekstbeschrijving (alt-tekst) hebben zodat schermlezers ze kunnen uitleggen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html'
    },
    {
        id: 'audio-only-and-video-only-prerecorded',
        refId: '1.2.1',
        level: 'A',
        roles: ['Content'],
        title: { en: 'Audio-only and Video-only (Prerecorded)', nl: 'Louter-geluid en louter-videobeeld (vooraf opgenomen)' },
        description: {
            original: {
                en: 'For prerecorded audio-only and prerecorded video-only media, an alternative is provided.',
                nl: 'Voor vooraf opgenomen louter-geluid en louter-videobeeld media wordt een alternatief geboden.'
            },
            easy: {
                en: 'Provide a transcript for podcasts and a text description or audio track for silent videos.',
                nl: 'Zorg voor een transcript bij podcasts en een tekstbeschrijving of audiospoor bij stille video\'s.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html'
    },
    {
        id: 'captions-prerecorded',
        refId: '1.2.2',
        level: 'A',
        roles: ['Content'],
        title: { en: 'Captions (Prerecorded)', nl: 'Ondertitels (vooraf opgenomen)' },
        description: {
            original: {
                en: 'Captions are provided for all prerecorded audio content in synchronized media.',
                nl: 'Er worden ondertitels geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media.'
            },
            easy: {
                en: 'Videos with sound must have captions so deaf users can understand what is being said.',
                nl: 'Video\'s met geluid moeten ondertiteling hebben zodat dove gebruikers kunnen begrijpen wat er wordt gezegd.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html'
    },
    {
        id: 'audio-description-or-media-alternative-prerecorded',
        refId: '1.2.3',
        level: 'A',
        roles: ['Content'],
        title: { en: 'Audio Description or Media Alternative (Prerecorded)', nl: 'Audiodescriptie of media-alternatief (vooraf opgenomen)' },
        description: {
            original: {
                en: 'An alternative for time-based media or audio description of the prerecorded video content is provided.',
                nl: 'Er wordt een alternatief voor tijdgebaseerde media of audiodescriptie van de vooraf opgenomen videocontent geboden.'
            },
            easy: {
                en: 'Provide a transcript or audio description for videos so blind users know what is happening on screen.',
                nl: 'Zorg voor een transcript of audiodescriptie bij video\'s zodat blinde gebruikers weten wat er op het scherm gebeurt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html'
    },
    {
        id: 'captions-live',
        refId: '1.2.4',
        level: 'AA',
        roles: ['Content'],
        title: { en: 'Captions (Live)', nl: 'Ondertitels (live)' },
        description: {
            original: {
                en: 'Captions are provided for all live audio content in synchronized media.',
                nl: 'Er worden ondertitels geleverd voor alle live audiocontent in gesynchroniseerde media.'
            },
            easy: {
                en: 'Live videos must have real-time captions.',
                nl: 'Live video\'s moeten real-time ondertiteling hebben.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html'
    },
    {
        id: 'audio-description-prerecorded',
        refId: '1.2.5',
        level: 'AA',
        roles: ['Content'],
        title: { en: 'Audio Description (Prerecorded)', nl: 'Audiodescriptie (vooraf opgenomen)' },
        description: {
            original: {
                en: 'Audio description is provided for all prerecorded video content in synchronized media.',
                nl: 'Er wordt audiodescriptie geleverd voor alle vooraf opgenomen videocontent in gesynchroniseerde media.'
            },
            easy: {
                en: 'Add an extra audio track describing important visual details in videos.',
                nl: 'Voeg een extra audiospoor toe dat belangrijke visuele details in video\'s beschrijft.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html'
    },
    {
        id: 'info-and-relationships',
        refId: '1.3.1',
        level: 'A',
        roles: ['Develop', 'Content'],
        title: { en: 'Info and Relationships', nl: 'Info en relaties' },
        description: {
            original: {
                en: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
                nl: 'Informatie, structuur en relaties die via presentatie worden overgebracht, kunnen door software worden bepaald of zijn beschikbaar in tekst.'
            },
            easy: {
                en: 'Use proper HTML tags like headings (h1-h6), lists, and tables so the structure makes sense without seeing it.',
                nl: 'Gebruik juiste HTML-tags zoals koppen (h1-h6), lijsten en tabellen zodat de structuur logisch is zonder deze te zien.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html'
    },
    {
        id: 'meaningful-sequence',
        refId: '1.3.2',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'Meaningful Sequence', nl: 'Betekenisvolle volgorde' },
        description: {
            original: {
                en: 'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
                nl: 'Wanneer de volgorde waarin content wordt gepresenteerd van invloed is op de betekenis, kan een correcte leesvolgorde door software worden bepaald.'
            },
            easy: {
                en: 'The order of content in the code must match the visual order so it makes sense when read by a screen reader.',
                nl: 'De volgorde van content in de code moet overeenkomen met de visuele volgorde zodat het logisch is voor een schermlezer.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html'
    },
    {
        id: 'sensory-characteristics',
        refId: '1.3.3',
        level: 'A',
        roles: ['Content', 'Design'],
        title: { en: 'Sensory Characteristics', nl: 'Zintuiglijke eigenschappen' },
        description: {
            original: {
                en: 'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.',
                nl: 'Instructies voor het begrijpen en bedienen van content zijn niet alleen afhankelijk van zintuiglijke eigenschappen van componenten zoals vorm, kleur, grootte, visuele locatie, oriëntatie of geluid.'
            },
            easy: {
                en: 'Don\'t say "click the green button" or "look at the box on the right". Use labels like "click the Start button".',
                nl: 'Zeg niet "klik op de groene knop" of "kijk naar het vak rechts". Gebruik labels zoals "klik op de Start-knop".'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html'
    },
    {
        id: 'orientation',
        refId: '1.3.4',
        level: 'AA',
        roles: ['Design', 'Develop'],
        title: { en: 'Orientation', nl: 'Weergavestand' },
        description: {
            original: {
                en: 'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.',
                nl: 'Content beperkt de weergave en bediening niet tot één enkele weergavestand, zoals staand of liggend, tenzij een specifieke weergavestand essentieel is.'
            },
            easy: {
                en: 'Your site must work in both portrait (vertical) and landscape (horizontal) modes on phones and tablets.',
                nl: 'Je site moet werken in zowel staande (verticale) als liggende (horizontale) modus op telefoons en tablets.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html'
    },
    {
        id: 'identify-input-purpose',
        refId: '1.3.5',
        level: 'AA',
        roles: ['Develop'],
        title: { en: 'Identify Input Purpose', nl: 'Identificeer het doel van de input' },
        description: {
            original: {
                en: 'The purpose of each input field collecting information about the user can be programmatically determined.',
                nl: 'Het doel van elk invoerveld dat informatie over de gebruiker verzamelt, kan door software worden bepaald.'
            },
            easy: {
                en: 'Use autocomplete attributes on form fields (like autocomplete="email") so browsers can help fill them in.',
                nl: 'Gebruik autocomplete-attributen op formuliervelden (zoals autocomplete="email") zodat browsers kunnen helpen bij het invullen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html'
    },
    {
        id: 'use-of-color',
        refId: '1.4.1',
        level: 'A',
        roles: ['Design'],
        title: { en: 'Use of Color', nl: 'Gebruik van kleur' },
        description: {
            original: {
                en: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
                nl: 'Kleur wordt niet gebruikt als het enige visuele middel om informatie over te brengen, een actie aan te geven, om een reactie te vragen of een visueel element te onderscheiden.'
            },
            easy: {
                en: 'Don\'t use color alone to show meaning. Use icons, text, or patterns too. (e.g. Error messages shouldn\'t just be red text).',
                nl: 'Gebruik niet alleen kleur om betekenis te tonen. Gebruik ook iconen, tekst of patronen. (bv. Foutmeldingen mogen niet alleen rode tekst zijn).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
    },
    {
        id: 'audio-control',
        refId: '1.4.2',
        level: 'A',
        roles: ['Content', 'Develop'],
        title: { en: 'Audio Control', nl: 'Geluidsbediening' },
        description: {
            original: {
                en: 'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.',
                nl: 'Als audio op een webpagina automatisch langer dan 3 seconden wordt afgespeeld, is er een mechanisme beschikbaar om de audio te pauzeren of te stoppen, of is er een mechanisme beschikbaar om het audiovolume onafhankelijk van het algemene systeemvolumeniveau te regelen.'
            },
            easy: {
                en: 'Don\'t auto-play audio. If you do, give users a way to stop it immediately.',
                nl: 'Speel audio niet automatisch af. Als je dat wel doet, geef gebruikers dan een manier om het direct te stoppen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html'
    },
    {
        id: 'contrast-minimum',
        refId: '1.4.3',
        level: 'AA',
        roles: ['Design'],
        title: { en: 'Contrast (Minimum)', nl: 'Contrast (Minimum)' },
        description: {
            original: {
                en: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1.',
                nl: 'De visuele presentatie van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 4.5:1.'
            },
            easy: {
                en: 'Text must stand out enough against the background. Grey text on a grey background is hard to read.',
                nl: 'Tekst moet genoeg afsteken tegen de achtergrond. Grijze tekst op een grijze achtergrond is moeilijk te lezen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html'
    },
    {
        id: 'resize-text',
        refId: '1.4.4',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Resize Text', nl: 'Tekstgrootte wijzigen' },
        description: {
            original: {
                en: 'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
                nl: 'Behalve voor ondertitels en afbeeldingen van tekst, kan tekst zonder hulptechnologie tot 200 procent worden vergroot zonder verlies van content of functionaliteit.'
            },
            easy: {
                en: 'Users must be able to zoom in up to 200% without the site breaking or text overlapping.',
                nl: 'Gebruikers moeten tot 200% kunnen inzoomen zonder dat de site breekt of tekst elkaar overlapt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html'
    },
    {
        id: 'images-of-text',
        refId: '1.4.5',
        level: 'AA',
        roles: ['Design', 'Content'],
        title: { en: 'Images of Text', nl: 'Afbeeldingen van tekst' },
        description: {
            original: {
                en: 'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text.',
                nl: 'Als de gebruikte technologieën de visuele presentatie kunnen bereiken, wordt tekst gebruikt om informatie over te brengen in plaats van afbeeldingen van tekst.'
            },
            easy: {
                en: 'Don\'t use pictures of text (like a JPG of a quote). Use real text so it can be selected, read by screen readers, and zoomed.',
                nl: 'Gebruik geen plaatjes van tekst (zoals een JPG van een quote). Gebruik echte tekst zodat het geselecteerd, voorgelezen en gezoomd kan worden.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html'
    },
    {
        id: 'reflow',
        refId: '1.4.10',
        level: 'AA',
        roles: ['Design', 'Develop'],
        title: { en: 'Reflow', nl: 'Reflow' },
        description: {
            original: {
                en: 'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions.',
                nl: 'Content kan worden gepresenteerd zonder verlies van informatie of functionaliteit, en zonder dat scrollen in twee dimensies nodig is.'
            },
            easy: {
                en: 'No horizontal scrolling! The site should fit on a phone screen (320px wide) without forcing the user to scroll left and right.',
                nl: 'Geen horizontaal scrollen! De site moet op een telefoonscherm (320px breed) passen zonder dat de gebruiker naar links en rechts moet scrollen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html'
    },
    {
        id: 'non-text-contrast',
        refId: '1.4.11',
        level: 'AA',
        roles: ['Design'],
        title: { en: 'Non-text Contrast', nl: 'Contrast van niet-tekstuele content' },
        description: {
            original: {
                en: 'The visual presentation of user interface components and graphical objects has a contrast ratio of at least 3:1 against adjacent colors.',
                nl: 'De visuele presentatie van componenten van de gebruikersinterface en grafische objecten heeft een contrastverhouding van ten minste 3:1 ten opzichte van aangrenzende kleuren.'
            },
            easy: {
                en: 'Buttons, icons, and input borders must have enough contrast (3:1) so people can see them clearly.',
                nl: 'Knoppen, iconen en invoerranden moeten genoeg contrast (3:1) hebben zodat mensen ze duidelijk kunnen zien.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html'
    },
    {
        id: 'text-spacing',
        refId: '1.4.12',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Text Spacing', nl: 'Tekstafstand' },
        description: {
            original: {
                en: 'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property.',
                nl: 'In content die is geïmplementeerd met opmaaktalen die de volgende tekststijleigenschappen ondersteunen, treedt geen verlies van content of functionaliteit op door al het volgende in te stellen en door geen enkele andere stijleigenschap te wijzigen.'
            },
            easy: {
                en: 'Users must be able to increase line height and letter spacing without the text getting cut off.',
                nl: 'Gebruikers moeten de regelhoogte en letterafstand kunnen vergroten zonder dat de tekst wordt afgesneden.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html'
    },
    {
        id: 'content-on-hover-or-focus',
        refId: '1.4.13',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Content on Hover or Focus', nl: 'Content bij hover of focus' },
        description: {
            original: {
                en: 'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true.',
                nl: 'Waar het ontvangen en vervolgens verwijderen van de aanwijzer-hover of toetsenbordfocus ervoor zorgt dat extra content zichtbaar en vervolgens verborgen wordt, geldt het volgende.'
            },
            easy: {
                en: 'Popups (like tooltips) that appear on hover must be dismissible, hoverable (you can move the mouse over them), and persistent.',
                nl: 'Pop-ups (zoals tooltips) die verschijnen bij hoveren moeten weg te klikken zijn, hoverbaar zijn (je kunt de muis eroverheen bewegen) en blijven staan.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html'
    },

    // Principle 2: Operable
    {
        id: 'keyboard',
        refId: '2.1.1',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Keyboard', nl: 'Toetsenbord' },
        description: {
            original: {
                en: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
                nl: 'Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder specifieke timing voor individuele toetsaanslagen.'
            },
            easy: {
                en: 'You must be able to use the website without a mouse, using only the Tab, Enter, and Arrow keys.',
                nl: 'Je moet de website kunnen gebruiken zonder muis, alleen met de Tab, Enter en Pijltoetsen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html'
    },
    {
        id: 'no-keyboard-trap',
        refId: '2.1.2',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'No Keyboard Trap', nl: 'Geen toetsenbordval' },
        description: {
            original: {
                en: 'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface.',
                nl: 'Als de toetsenbordfocus naar een component van de pagina kan worden verplaatst met behulp van een toetsenbordinterface, dan kan de focus van dat component worden weggehaald met alleen een toetsenbordinterface.'
            },
            easy: {
                en: 'You shouldn\'t get stuck in an element (like a modal or map) when tabbing. You must be able to tab out of it.',
                nl: 'Je mag niet vast komen te zitten in een element (zoals een modaal venster of kaart) tijdens het tabben. Je moet eruit kunnen tabben.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html'
    },
    {
        id: 'character-key-shortcuts',
        refId: '2.1.4',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Character Key Shortcuts', nl: 'Sneltoetsen met tekens' },
        description: {
            original: {
                en: 'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true.',
                nl: 'Als een sneltoets in content is geïmplementeerd met alleen letter- (inclusief hoofd- en kleine letters), leesteken-, cijfer- of symbooltekens, dan is ten minste een van de volgende waar.'
            },
            easy: {
                en: 'Single-key shortcuts (like pressing "f" to search) must be turn-off-able or remappable so they don\'t interfere with typing.',
                nl: 'Sneltoetsen met één toets (zoals op "f" drukken om te zoeken) moeten uit te schakelen of aan te passen zijn zodat ze niet storen bij het typen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html'
    },
    {
        id: 'timing-adjustable',
        refId: '2.2.1',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'Timing Adjustable', nl: 'Timing aanpasbaar' },
        description: {
            original: {
                en: 'For each time limit that is set by the content, at least one of the following is true.',
                nl: 'Voor elke tijdslimiet die door de content wordt ingesteld, is ten minste een van de volgende waar.'
            },
            easy: {
                en: 'If there is a time limit (like a session timeout), users must be able to extend it.',
                nl: 'Als er een tijdslimiet is (zoals een sessie-timeout), moeten gebruikers deze kunnen verlengen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html'
    },
    {
        id: 'pause-stop-hide',
        refId: '2.2.2',
        level: 'A',
        roles: ['Design', 'Develop'],
        title: { en: 'Pause, Stop, Hide', nl: 'Pauzeren, stoppen, verbergen' },
        description: {
            original: {
                en: 'For moving, blinking, scrolling, or auto-updating information, all of the following are true.',
                nl: 'Voor bewegende, knipperende, scrollende of automatisch bijwerkende informatie geldt al het volgende.'
            },
            easy: {
                en: 'Moving content (like carousels or tickers) must be pausable by the user.',
                nl: 'Bewegende content (zoals carrousels of tickers) moet door de gebruiker gepauzeerd kunnen worden.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html'
    },
    {
        id: 'three-flashes-or-below-threshold',
        refId: '2.3.1',
        level: 'A',
        roles: ['Design', 'Content'],
        title: { en: 'Three Flashes or Below Threshold', nl: 'Drie flitsen of beneden de drempelwaarde' },
        description: {
            original: {
                en: 'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
                nl: 'Webpagina\'s bevatten niets dat meer dan drie keer in een periode van één seconde flitst, of de flits blijft onder de algemene flits- en rode flitsdrempelwaarden.'
            },
            easy: {
                en: 'No flashing lights that could cause seizures. Nothing should flash more than 3 times a second.',
                nl: 'Geen flitsende lichten die aanvallen kunnen veroorzaken. Niets mag meer dan 3 keer per seconde flitsen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html'
    },
    {
        id: 'bypass-blocks',
        refId: '2.4.1',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Bypass Blocks', nl: 'Blokken omzeilen' },
        description: {
            original: {
                en: 'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
                nl: 'Er is een mechanisme beschikbaar om blokken content te omzeilen die op meerdere webpagina\'s worden herhaald.'
            },
            easy: {
                en: 'Provide a "Skip to Content" link at the top so keyboard users don\'t have to tab through the menu on every page.',
                nl: 'Zorg voor een "Ga naar inhoud"-link bovenaan zodat toetsenbordgebruikers niet op elke pagina door het menu hoeven te tabben.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html'
    },
    {
        id: 'page-titled',
        refId: '2.4.2',
        level: 'A',
        roles: ['Content', 'Develop'],
        title: { en: 'Page Titled', nl: 'Pagina met titel' },
        description: {
            original: {
                en: 'Web pages have titles that describe topic or purpose.',
                nl: 'Webpagina\'s hebben titels die het onderwerp of doel beschrijven.'
            },
            easy: {
                en: 'Every page must have a unique and descriptive title (shown in the browser tab).',
                nl: 'Elke pagina moet een unieke en beschrijvende titel hebben (te zien in het browsertabblad).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html'
    },
    {
        id: 'focus-order',
        refId: '2.4.3',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'Focus Order', nl: 'Focusvolgorde' },
        description: {
            original: {
                en: 'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
                nl: 'Als er door een webpagina sequentieel kan worden genavigeerd en de navigatievolgorde van invloed is op de betekenis of bediening, ontvangen componenten met focus de focus in een volgorde die de betekenis en bedienbaarheid behoudt.'
            },
            easy: {
                en: 'The order you tab through elements must be logical (usually left-to-right, top-to-bottom).',
                nl: 'De volgorde waarin je door elementen tabt moet logisch zijn (meestal van links naar rechts, van boven naar beneden).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html'
    },
    {
        id: 'link-purpose-in-context',
        refId: '2.4.4',
        level: 'A',
        roles: ['Content', 'Design'],
        title: { en: 'Link Purpose (In Context)', nl: 'Linkdoel (in context)' },
        description: {
            original: {
                en: 'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.',
                nl: 'Het doel van elke link kan worden bepaald uit alleen de linktekst of uit de linktekst samen met de door software bepaalde linkcontext.'
            },
            easy: {
                en: 'Link text should make sense. Avoid "Click here". Use "Read more about WCAG" instead.',
                nl: 'Linktekst moet logisch zijn. Vermijd "Klik hier". Gebruik in plaats daarvan "Lees meer over WCAG".'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html'
    },
    {
        id: 'multiple-ways',
        refId: '2.4.5',
        level: 'AA',
        roles: ['Design', 'Develop'],
        title: { en: 'Multiple Ways', nl: 'Meerdere manieren' },
        description: {
            original: {
                en: 'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
                nl: 'Er is meer dan één manier beschikbaar om een webpagina binnen een verzameling webpagina\'s te vinden, behalve wanneer de webpagina het resultaat is van, of een stap is in, een proces.'
            },
            easy: {
                en: 'Provide multiple ways to find pages, like a search bar, a sitemap, or a navigation menu.',
                nl: 'Bied meerdere manieren om pagina\'s te vinden, zoals een zoekbalk, een sitemap of een navigatiemenu.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html'
    },
    {
        id: 'headings-and-labels',
        refId: '2.4.6',
        level: 'AA',
        roles: ['Content', 'Design'],
        title: { en: 'Headings and Labels', nl: 'Koppen en labels' },
        description: {
            original: {
                en: 'Headings and labels describe topic or purpose.',
                nl: 'Koppen en labels beschrijven het onderwerp of doel.'
            },
            easy: {
                en: 'Page headings and form labels must be clear and descriptive so users know where they are and what to do.',
                nl: 'Paginakoppen en formulierlabels moeten duidelijk en beschrijvend zijn, zodat gebruikers weten waar ze zijn en wat ze moeten doen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html'
    },
    {
        id: 'focus-visible',
        refId: '2.4.7',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Focus Visible', nl: 'Focus zichtbaar' },
        description: {
            original: {
                en: 'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
                nl: 'Elke met het toetsenbord bedienbare gebruikersinterface heeft een bedieningswijze waarin de focusindicator van het toetsenbord zichtbaar is.'
            },
            easy: {
                en: 'When you tab through the page, you should clearly see which element is selected (usually with a ring or outline).',
                nl: 'Wanneer je door de pagina tabt, moet je duidelijk zien welk element geselecteerd is (meestal met een ring of omlijning).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html'
    },
    {
        id: 'pointer-gestures',
        refId: '2.5.1',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'Pointer Gestures', nl: 'Aanwijzergebaren' },
        description: {
            original: {
                en: 'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture.',
                nl: 'Alle functionaliteit die multipoint- of padgebaseerde gebaren gebruikt voor bediening, kan worden bediend met een enkele aanwijzer zonder een padgebaseerd gebaar.'
            },
            easy: {
                en: 'Don\'t require complex gestures like pinching or swiping. Provide simple buttons as alternatives.',
                nl: 'Vereis geen complexe gebaren zoals knijpen of vegen. Zorg voor simpele knoppen als alternatief.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html'
    },
    {
        id: 'pointer-cancellation',
        refId: '2.5.2',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Pointer Cancellation', nl: 'Aanwijzerannulering' },
        description: {
            original: {
                en: 'For functionality that can be operated using a single pointer, at least one of the following is true.',
                nl: 'Voor functionaliteit die met een enkele aanwijzer kan worden bediend, is ten minste een van de volgende waar.'
            },
            easy: {
                en: 'Actions should happen on the "up" click, not the "down" click, so users can cancel by moving the mouse away.',
                nl: 'Acties moeten gebeuren bij het "loslaten" van de klik, niet bij het "indrukken", zodat gebruikers kunnen annuleren door de muis weg te bewegen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html'
    },
    {
        id: 'label-in-name',
        refId: '2.5.3',
        level: 'A',
        roles: ['Develop', 'Content'],
        title: { en: 'Label in Name', nl: 'Label in naam' },
        description: {
            original: {
                en: 'For user interface components with labels that include text or images of text, the name contains the text that is presented visually.',
                nl: 'Voor componenten van de gebruikersinterface met labels die tekst of afbeeldingen van tekst bevatten, bevat de naam de tekst die visueel wordt gepresenteerd.'
            },
            easy: {
                en: 'The visible label of a button must match the name used by screen readers (and speech recognition software).',
                nl: 'Het zichtbare label van een knop moet overeenkomen met de naam die door schermlezers (en spraakherkenningssoftware) wordt gebruikt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html'
    },
    {
        id: 'motion-actuation',
        refId: '2.5.4',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Motion Actuation', nl: 'Bewegingsactivering' },
        description: {
            original: {
                en: 'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation.',
                nl: 'Functionaliteit die kan worden bediend door beweging van het apparaat of beweging van de gebruiker, kan ook worden bediend door componenten van de gebruikersinterface en het reageren op de beweging kan worden uitgeschakeld om onbedoelde activering te voorkomen.'
            },
            easy: {
                en: 'Don\'t require shaking the device to do something. Provide a button too.',
                nl: 'Vereis niet dat het apparaat geschud moet worden om iets te doen. Zorg ook voor een knop.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html'
    },

    // Principle 3: Understandable
    {
        id: 'language-of-page',
        refId: '3.1.1',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Language of Page', nl: 'Taal van de pagina' },
        description: {
            original: {
                en: 'The default human language of each Web page can be programmatically determined.',
                nl: 'De standaard menselijke taal van elke webpagina kan door software worden bepaald.'
            },
            easy: {
                en: 'Set the language attribute on the html tag (e.g. <html lang="en">).',
                nl: 'Stel het taalattribuut in op de html-tag (bv. <html lang="nl">).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html'
    },
    {
        id: 'language-of-parts',
        refId: '3.1.2',
        level: 'AA',
        roles: ['Develop', 'Content'],
        title: { en: 'Language of Parts', nl: 'Taal van onderdelen' },
        description: {
            original: {
                en: 'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediate surrounding text.',
                nl: 'De menselijke taal van elke passage of zin in de content kan door software worden bepaald, behalve voor eigennamen, technische termen, woorden van onbepaalde taal en woorden of zinnen die deel zijn gaan uitmaken van de volkstaal van de direct omringende tekst.'
            },
            easy: {
                en: 'If you switch languages in the text (like a French quote in an English text), mark it with a lang attribute.',
                nl: 'Als je van taal wisselt in de tekst (zoals een Frans citaat in een Nederlandse tekst), markeer dit dan met een lang-attribuut.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html'
    },
    {
        id: 'on-focus',
        refId: '3.2.1',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'On Focus', nl: 'Bij focus' },
        description: {
            original: {
                en: 'When any user interface component receives focus, it does not initiate a change of context.',
                nl: 'Wanneer een component van de gebruikersinterface de focus ontvangt, initieert dit geen verandering van context.'
            },
            easy: {
                en: 'Tabbing to an element shouldn\'t automatically trigger a popup or page change.',
                nl: 'Naar een element tabben mag niet automatisch een pop-up of paginawijziging veroorzaken.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html'
    },
    {
        id: 'on-input',
        refId: '3.2.2',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'On Input', nl: 'Bij input' },
        description: {
            original: {
                en: 'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
                nl: 'Het wijzigen van de instelling van een component van de gebruikersinterface veroorzaakt niet automatisch een verandering van context, tenzij de gebruiker vóór het gebruik van het component op de hoogte is gesteld van het gedrag.'
            },
            easy: {
                en: 'Changing a form setting shouldn\'t submit the form automatically unless the user expects it.',
                nl: 'Een formulierinstelling wijzigen mag het formulier niet automatisch verzenden, tenzij de gebruiker dit verwacht.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html'
    },
    {
        id: 'consistent-navigation',
        refId: '3.2.3',
        level: 'AA',
        roles: ['Design', 'Develop'],
        title: { en: 'Consistent Navigation', nl: 'Consistente navigatie' },
        description: {
            original: {
                en: 'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
                nl: 'Navigatiemechanismen die op meerdere webpagina\'s binnen een verzameling webpagina\'s worden herhaald, komen elke keer dat ze worden herhaald in dezelfde relatieve volgorde voor, tenzij een wijziging door de gebruiker wordt geïnitieerd.'
            },
            easy: {
                en: 'Keep the navigation menu in the same place on every page.',
                nl: 'Houd het navigatiemenu op elke pagina op dezelfde plek.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html'
    },
    {
        id: 'consistent-identification',
        refId: '3.2.4',
        level: 'AA',
        roles: ['Design', 'Content'],
        title: { en: 'Consistent Identification', nl: 'Consistente identificatie' },
        description: {
            original: {
                en: 'Components that have the same functionality within a set of Web pages are identified consistently.',
                nl: 'Componenten die dezelfde functionaliteit hebben binnen een verzameling webpagina\'s worden consistent geïdentificeerd.'
            },
            easy: {
                en: 'Use the same icon for the same thing everywhere (e.g. don\'t use a magnifying glass for search on one page and a binocular on another).',
                nl: 'Gebruik overal hetzelfde icoon voor hetzelfde ding (bv. gebruik geen vergrootglas voor zoeken op de ene pagina en een verrekijker op de andere).'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html'
    },
    {
        id: 'error-identification',
        refId: '3.3.1',
        level: 'A',
        roles: ['Develop', 'Design'],
        title: { en: 'Error Identification', nl: 'Foutidentificatie' },
        description: {
            original: {
                en: 'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
                nl: 'Als een invoerfout automatisch wordt gedetecteerd, wordt het item dat fout is geïdentificeerd en wordt de fout in tekst aan de gebruiker beschreven.'
            },
            easy: {
                en: 'If there is a form error, tell the user exactly what is wrong in text.',
                nl: 'Als er een formulierfout is, vertel de gebruiker dan precies wat er mis is in tekst.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html'
    },
    {
        id: 'labels-or-instructions',
        refId: '3.3.2',
        level: 'A',
        roles: ['Design', 'Content'],
        title: { en: 'Labels or Instructions', nl: 'Labels of instructies' },
        description: {
            original: {
                en: 'Labels or instructions are provided when content requires user input.',
                nl: 'Labels of instructies worden gegeven wanneer content gebruikersinvoer vereist.'
            },
            easy: {
                en: 'Provide clear instructions for inputs (e.g. "Date format: DD/MM/YYYY").',
                nl: 'Zorg voor duidelijke instructies voor invoervelden (bv. "Datumformaat: DD/MM/JJJJ").'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html'
    },
    {
        id: 'error-suggestion',
        refId: '3.3.3',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Error Suggestion', nl: 'Foutsuggestie' },
        description: {
            original: {
                en: 'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
                nl: 'Als een invoerfout automatisch wordt gedetecteerd en suggesties voor correctie bekend zijn, worden de suggesties aan de gebruiker gegeven, tenzij dit de veiligheid of het doel van de content in gevaar zou brengen.'
            },
            easy: {
                en: 'If a user makes a mistake, suggest how to fix it (e.g. "Did you mean...").',
                nl: 'Als een gebruiker een fout maakt, suggereer dan hoe dit op te lossen is (bv. "Bedoelde u...").'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html'
    },
    {
        id: 'error-prevention-legal-financial-data',
        refId: '3.3.4',
        level: 'AA',
        roles: ['Develop', 'Design'],
        title: { en: 'Error Prevention (Legal, Financial, Data)', nl: 'Foutpreventie (Wettelijk, Financieel, Gegevens)' },
        description: {
            original: {
                en: 'For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true.',
                nl: 'Voor webpagina\'s die wettelijke verplichtingen of financiële transacties voor de gebruiker veroorzaken, die door de gebruiker controleerbare gegevens in gegevensopslagsystemen wijzigen of verwijderen, of die testantwoorden van de gebruiker verzenden, is ten minste een van de volgende waar.'
            },
            easy: {
                en: 'For important actions (like money transfers), let users review, confirm, or reverse the action.',
                nl: 'Voor belangrijke acties (zoals geldovermakingen), laat gebruikers de actie controleren, bevestigen of terugdraaien.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html'
    },

    // Principle 4: Robust
    {
        id: 'parsing',
        refId: '4.1.1',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Parsing', nl: 'Parsing' },
        description: {
            original: {
                en: 'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.',
                nl: 'In content die is geïmplementeerd met opmaaktalen, hebben elementen volledige start- en eindtags, zijn elementen genest volgens hun specificaties, bevatten elementen geen dubbele attributen en zijn alle ID\'s uniek, behalve waar de specificaties deze kenmerken toestaan.'
            },
            easy: {
                en: 'Write clean, valid HTML code without syntax errors.',
                nl: 'Schrijf schone, geldige HTML-code zonder syntaxisfouten.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html'
    },
    {
        id: 'name-role-value',
        refId: '4.1.2',
        level: 'A',
        roles: ['Develop'],
        title: { en: 'Name, Role, Value', nl: 'Naam, rol, waarde' },
        description: {
            original: {
                en: 'For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.',
                nl: 'Voor alle componenten van de gebruikersinterface (inclusief maar niet beperkt tot: formulierelementen, links en componenten gegenereerd door scripts), kunnen de naam en rol door software worden bepaald; toestanden, eigenschappen en waarden die door de gebruiker kunnen worden ingesteld, kunnen door software worden ingesteld; en melding van wijzigingen aan deze items is beschikbaar voor user agents, inclusief hulptechnologieën.'
            },
            easy: {
                en: 'Custom controls (like a custom dropdown) must tell screen readers what they are, what state they are in (open/closed), and when they change.',
                nl: 'Aangepaste bedieningselementen (zoals een aangepaste dropdown) moeten aan schermlezers vertellen wat ze zijn, in welke staat ze verkeren (open/gesloten) en wanneer ze veranderen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html'
    },
    {
        id: 'status-messages',
        refId: '4.1.3',
        level: 'AA',
        roles: ['Develop'],
        title: { en: 'Status Messages', nl: 'Statusberichten' },
        description: {
            original: {
                en: 'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
                nl: 'In content die is geïmplementeerd met opmaaktalen, kunnen statusberichten door software worden bepaald via rol of eigenschappen, zodat ze door hulptechnologieën aan de gebruiker kunnen worden gepresenteerd zonder focus te ontvangen.'
            },
            easy: {
                en: 'Status messages (like "Form submitted successfully") must be announced by screen readers without moving focus.',
                nl: 'Statusberichten (zoals "Formulier succesvol verzonden") moeten worden aangekondigd door schermlezers zonder de focus te verplaatsen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html'
    },
    // AAA Rules
    {
        id: 'sign-language-prerecorded',
        refId: '1.2.6',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Sign Language (Prerecorded)', nl: 'Gebarentaal (vooraf opgenomen)' },
        description: {
            original: {
                en: 'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
                nl: 'Er wordt gebarentaalvertolking geleverd voor alle vooraf opgenomen audiocontent in gesynchroniseerde media.'
            },
            easy: {
                en: 'Provide a sign language video for all audio content.',
                nl: 'Zorg voor een gebarentaalvideo voor alle audiocontent.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html'
    },
    {
        id: 'extended-audio-description-prerecorded',
        refId: '1.2.7',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Extended Audio Description (Prerecorded)', nl: 'Verlengde audiodescriptie (vooraf opgenomen)' },
        description: {
            original: {
                en: 'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
                nl: 'Wanneer pauzes in het voorgrondgeluid onvoldoende zijn om audiodescripties de betekenis van de video te laten overbrengen, wordt verlengde audiodescriptie geleverd voor alle vooraf opgenomen videocontent in gesynchroniseerde media.'
            },
            easy: {
                en: 'If the video is too fast for audio description, pause the video to allow time for the description.',
                nl: 'Als de video te snel is voor audiodescriptie, pauzeer de video dan om tijd te maken voor de beschrijving.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html'
    },
    {
        id: 'media-alternative-prerecorded',
        refId: '1.2.8',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Media Alternative (Prerecorded)', nl: 'Media-alternatief (vooraf opgenomen)' },
        description: {
            original: {
                en: 'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
                nl: 'Er wordt een alternatief voor tijdgebaseerde media geboden voor alle vooraf opgenomen gesynchroniseerde media en voor alle vooraf opgenomen louter-videobeeld media.'
            },
            easy: {
                en: 'Provide a text transcript that includes all audio and visual information.',
                nl: 'Zorg voor een teksttranscript dat alle audio- en visuele informatie bevat.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html'
    },
    {
        id: 'audio-only-live',
        refId: '1.2.9',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Audio-only (Live)', nl: 'Louter-geluid (live)' },
        description: {
            original: {
                en: 'An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
                nl: 'Er wordt een alternatief voor tijdgebaseerde media geboden dat gelijkwaardige informatie presenteert voor live louter-geluid content.'
            },
            easy: {
                en: 'Provide a live transcript or captions for live audio.',
                nl: 'Zorg voor een live transcript of ondertiteling voor live audio.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html'
    },
    {
        id: 'identify-purpose',
        refId: '1.3.6',
        level: 'AAA',
        roles: ['Develop'],
        title: { en: 'Identify Purpose', nl: 'Identificeer doel' },
        description: {
            original: {
                en: 'In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.',
                nl: 'In content die is geïmplementeerd met opmaaktalen, kan het doel van componenten van de gebruikersinterface, iconen en regio\'s door software worden bepaald.'
            },
            easy: {
                en: 'Use specific HTML5 regions (like main, nav) and ARIA landmarks so software knows what each part of the page is for.',
                nl: 'Gebruik specifieke HTML5-regio\'s (zoals main, nav) en ARIA-landmarks zodat software weet waar elk deel van de pagina voor dient.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html'
    },
    {
        id: 'contrast-enhanced',
        refId: '1.4.6',
        level: 'AAA',
        roles: ['Design'],
        title: { en: 'Contrast (Enhanced)', nl: 'Contrast (Verhoogd)' },
        description: {
            original: {
                en: 'The visual presentation of text and images of text has a contrast ratio of at least 7:1.',
                nl: 'De visuele presentatie van tekst en afbeeldingen van tekst heeft een contrastverhouding van ten minste 7:1.'
            },
            easy: {
                en: 'Text needs very high contrast (7:1) to be readable by people with low vision.',
                nl: 'Tekst heeft een zeer hoog contrast (7:1) nodig om leesbaar te zijn voor mensen met een visuele beperking.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html'
    },
    {
        id: 'low-or-no-background-audio',
        refId: '1.4.7',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Low or No Background Audio', nl: 'Laag of geen achtergrondgeluid' },
        description: {
            original: {
                en: 'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true.',
                nl: 'Voor vooraf opgenomen louter-geluid content die (1) voornamelijk spraak op de voorgrond bevat, (2) geen audio-CAPTCHA of audiologo is, en (3) geen vocalisatie is die voornamelijk bedoeld is als muzikale expressie zoals zingen of rappen, is ten minste een van de volgende waar.'
            },
            easy: {
                en: 'Background music should be very quiet or absent when someone is speaking.',
                nl: 'Achtergrondmuziek moet erg stil of afwezig zijn als iemand spreekt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html'
    },
    {
        id: 'visual-presentation',
        refId: '1.4.8',
        level: 'AAA',
        roles: ['Design', 'Develop'],
        title: { en: 'Visual Presentation', nl: 'Visuele presentatie' },
        description: {
            original: {
                en: 'For the visual presentation of blocks of text, a mechanism is available to achieve the following.',
                nl: 'Voor de visuele presentatie van tekstblokken is een mechanisme beschikbaar om het volgende te bereiken.'
            },
            easy: {
                en: 'Users can customize colors, width, and spacing of text blocks.',
                nl: 'Gebruikers kunnen kleuren, breedte en afstand van tekstblokken aanpassen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html'
    },
    {
        id: 'images-of-text-no-exception',
        refId: '1.4.9',
        level: 'AAA',
        roles: ['Design', 'Content'],
        title: { en: 'Images of Text (No Exception)', nl: 'Afbeeldingen van tekst (geen uitzondering)' },
        description: {
            original: {
                en: 'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.',
                nl: 'Afbeeldingen van tekst worden alleen gebruikt voor pure decoratie of waar een bepaalde presentatie van tekst essentieel is voor de informatie die wordt overgebracht.'
            },
            easy: {
                en: 'Never use images of text. Always use real text.',
                nl: 'Gebruik nooit afbeeldingen van tekst. Gebruik altijd echte tekst.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html'
    },
    {
        id: 'keyboard-no-exception',
        refId: '2.1.3',
        level: 'AAA',
        roles: ['Develop'],
        title: { en: 'Keyboard (No Exception)', nl: 'Toetsenbord (geen uitzondering)' },
        description: {
            original: {
                en: 'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
                nl: 'Alle functionaliteit van de content is bedienbaar via een toetsenbordinterface zonder specifieke timing voor individuele toetsaanslagen.'
            },
            easy: {
                en: 'Everything must work with a keyboard, with no exceptions.',
                nl: 'Alles moet werken met een toetsenbord, zonder uitzonderingen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html'
    },
    {
        id: 'no-timing',
        refId: '2.2.3',
        level: 'AAA',
        roles: ['Develop', 'Design'],
        title: { en: 'No Timing', nl: 'Geen timing' },
        description: {
            original: {
                en: 'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
                nl: 'Timing is geen essentieel onderdeel van de gebeurtenis of activiteit die door de content wordt gepresenteerd, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.'
            },
            easy: {
                en: 'No time limits on anything.',
                nl: 'Geen tijdslimieten op wat dan ook.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html'
    },
    {
        id: 'interruptions',
        refId: '2.2.4',
        level: 'AAA',
        roles: ['Develop', 'Design'],
        title: { en: 'Interruptions', nl: 'Onderbrekingen' },
        description: {
            original: {
                en: 'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
                nl: 'Onderbrekingen kunnen door de gebruiker worden uitgesteld of onderdrukt, behalve onderbrekingen die betrekking hebben op een noodgeval.'
            },
            easy: {
                en: 'Users can turn off alerts and updates so they aren\'t distracted.',
                nl: 'Gebruikers kunnen meldingen en updates uitschakelen zodat ze niet worden afgeleid.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html'
    },
    {
        id: 're-authenticating',
        refId: '2.2.5',
        level: 'AAA',
        roles: ['Develop'],
        title: { en: 'Re-authenticating', nl: 'Herauthenticatie' },
        description: {
            original: {
                en: 'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
                nl: 'Wanneer een geauthenticeerde sessie verloopt, kan de gebruiker de activiteit voortzetten zonder verlies van gegevens na herauthenticatie.'
            },
            easy: {
                en: 'If your session times out, you shouldn\'t lose your work when you log back in.',
                nl: 'Als je sessie verloopt, mag je je werk niet verliezen wanneer je opnieuw inlogt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html'
    },
    {
        id: 'timeouts',
        refId: '2.2.6',
        level: 'AAA',
        roles: ['Develop', 'Design'],
        title: { en: 'Timeouts', nl: 'Time-outs' },
        description: {
            original: {
                en: 'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.',
                nl: 'Gebruikers worden gewaarschuwd voor de duur van enige inactiviteit van de gebruiker die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens meer dan 20 uur worden bewaard wanneer de gebruiker geen actie onderneemt.'
            },
            easy: {
                en: 'Warn users if their data will be lost after a period of inactivity.',
                nl: 'Waarschuw gebruikers als hun gegevens verloren gaan na een periode van inactiviteit.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html'
    },
    {
        id: 'three-flashes',
        refId: '2.3.2',
        level: 'AAA',
        roles: ['Design'],
        title: { en: 'Three Flashes', nl: 'Drie flitsen' },
        description: {
            original: {
                en: 'Web pages do not contain anything that flashes more than three times in any one second period.',
                nl: 'Webpagina\'s bevatten niets dat meer dan drie keer in een periode van één seconde flitst.'
            },
            easy: {
                en: 'Nothing should flash more than 3 times a second, ever.',
                nl: 'Niets mag ooit meer dan 3 keer per seconde flitsen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html'
    },
    {
        id: 'animation-from-interactions',
        refId: '2.3.3',
        level: 'AAA',
        roles: ['Design', 'Develop'],
        title: { en: 'Animation from Interactions', nl: 'Animatie door interacties' },
        description: {
            original: {
                en: 'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
                nl: 'Bewegingsanimatie die wordt geactiveerd door interactie kan worden uitgeschakeld, tenzij de animatie essentieel is voor de functionaliteit of de informatie die wordt overgebracht.'
            },
            easy: {
                en: 'Users can turn off animations that happen when they click or scroll.',
                nl: 'Gebruikers kunnen animaties uitschakelen die gebeuren wanneer ze klikken of scrollen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html'
    },
    {
        id: 'location',
        refId: '2.4.8',
        level: 'AAA',
        roles: ['Design', 'Develop'],
        title: { en: 'Location', nl: 'Locatie' },
        description: {
            original: {
                en: 'Information about the user\'s location within a set of Web pages is available.',
                nl: 'Informatie over de locatie van de gebruiker binnen een verzameling webpagina\'s is beschikbaar.'
            },
            easy: {
                en: 'Use breadcrumbs so users know where they are in the site structure.',
                nl: 'Gebruik kruimelpaden zodat gebruikers weten waar ze zich in de sitestructuur bevinden.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html'
    },
    {
        id: 'link-purpose-link-only',
        refId: '2.4.9',
        level: 'AAA',
        roles: ['Content', 'Design'],
        title: { en: 'Link Purpose (Link Only)', nl: 'Linkdoel (alleen link)' },
        description: {
            original: {
                en: 'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
                nl: 'Er is een mechanisme beschikbaar om het doel van elke link te identificeren uit alleen de linktekst, behalve waar het doel van de link dubbelzinnig zou zijn voor gebruikers in het algemeen.'
            },
            easy: {
                en: 'Every link must make sense on its own (e.g. "Read about WCAG" instead of just "Read more").',
                nl: 'Elke link moet op zichzelf logisch zijn (bv. "Lees over WCAG" in plaats van alleen "Lees meer").'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html'
    },
    {
        id: 'section-headings',
        refId: '2.4.10',
        level: 'AAA',
        roles: ['Content', 'Design'],
        title: { en: 'Section Headings', nl: 'Sectiekoppen' },
        description: {
            original: {
                en: 'Section headings are used to organize the content.',
                nl: 'Sectiekoppen worden gebruikt om de content te organiseren.'
            },
            easy: {
                en: 'Break up long content with headings for every section.',
                nl: 'Breek lange content op met koppen voor elke sectie.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html'
    },
    {
        id: 'target-size',
        refId: '2.5.5',
        level: 'AAA',
        roles: ['Design', 'Develop'],
        title: { en: 'Target Size', nl: 'Grootte van het aanwijsgebied' },
        description: {
            original: {
                en: 'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when...',
                nl: 'De grootte van het doel voor aanwijzerinvoer is ten minste 44 bij 44 CSS-pixels, behalve wanneer...'
            },
            easy: {
                en: 'Buttons and links should be large enough (44x44 pixels) to easily tap with a finger.',
                nl: 'Knoppen en links moeten groot genoeg zijn (44x44 pixels) om gemakkelijk met een vinger op te tikken.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html'
    },
    {
        id: 'concurrent-input-mechanisms',
        refId: '2.5.6',
        level: 'AAA',
        roles: ['Develop'],
        title: { en: 'Concurrent Input Mechanisms', nl: 'Gelijktijdige invoermechanismen' },
        description: {
            original: {
                en: 'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
                nl: 'Webcontent beperkt het gebruik van invoermodaliteiten die beschikbaar zijn op een platform niet, behalve waar de beperking essentieel is, vereist is om de veiligheid van de content te waarborgen of vereist is om gebruikersinstellingen te respecteren.'
            },
            easy: {
                en: 'Users can switch between mouse, keyboard, touch, and voice input at any time.',
                nl: 'Gebruikers kunnen op elk moment wisselen tussen muis, toetsenbord, aanraking en spraakinvoer.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html'
    },
    {
        id: 'unusual-words',
        refId: '3.1.3',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Unusual Words', nl: 'Ongebruikelijke woorden' },
        description: {
            original: {
                en: 'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
                nl: 'Er is een mechanisme beschikbaar voor het identificeren van specifieke definities van woorden of zinnen die op een ongebruikelijke of beperkte manier worden gebruikt, inclusief idiomen en jargon.'
            },
            easy: {
                en: 'Explain hard words, jargon, or idioms.',
                nl: 'Leg moeilijke woorden, jargon of uitdrukkingen uit.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html'
    },
    {
        id: 'abbreviations',
        refId: '3.1.4',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Abbreviations', nl: 'Afkortingen' },
        description: {
            original: {
                en: 'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
                nl: 'Er is een mechanisme beschikbaar voor het identificeren van de uitgeschreven vorm of betekenis van afkortingen.'
            },
            easy: {
                en: 'Explain abbreviations the first time you use them (e.g. "World Wide Web Consortium (W3C)").',
                nl: 'Leg afkortingen uit de eerste keer dat je ze gebruikt (bv. "World Wide Web Consortium (W3C)").'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html'
    },
    {
        id: 'reading-level',
        refId: '3.1.5',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Reading Level', nl: 'Leesniveau' },
        description: {
            original: {
                en: 'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
                nl: 'Wanneer tekst een leesvaardigheid vereist die geavanceerder is dan het niveau van het lager secundair onderwijs na verwijdering van eigennamen en titels, is aanvullende content of een versie die geen leesvaardigheid vereist die geavanceerder is dan het niveau van het lager secundair onderwijs, beschikbaar.'
            },
            easy: {
                en: 'Write simply. If the text is complex, provide a simpler summary.',
                nl: 'Schrijf eenvoudig. Als de tekst complex is, geef dan een eenvoudigere samenvatting.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html'
    },
    {
        id: 'pronunciation',
        refId: '3.1.6',
        level: 'AAA',
        roles: ['Content'],
        title: { en: 'Pronunciation', nl: 'Uitspraak' },
        description: {
            original: {
                en: 'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
                nl: 'Er is een mechanisme beschikbaar voor het identificeren van specifieke uitspraak van woorden waar de betekenis van de woorden, in context, dubbelzinnig is zonder de uitspraak te kennen.'
            },
            easy: {
                en: 'If a word can be pronounced in two ways with different meanings, explain how to say it.',
                nl: 'Als een woord op twee manieren kan worden uitgesproken met verschillende betekenissen, leg dan uit hoe je het zegt.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html'
    },
    {
        id: 'change-on-request',
        refId: '3.2.5',
        level: 'AAA',
        roles: ['Develop', 'Design'],
        title: { en: 'Change on Request', nl: 'Verandering op verzoek' },
        description: {
            original: {
                en: 'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
                nl: 'Veranderingen van context worden alleen geïnitieerd op verzoek van de gebruiker of er is een mechanisme beschikbaar om dergelijke veranderingen uit te schakelen.'
            },
            easy: {
                en: 'Don\'t change the page layout or context automatically. Let the user choose.',
                nl: 'Verander de pagina-indeling of context niet automatisch. Laat de gebruiker kiezen.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html'
    },
    {
        id: 'help',
        refId: '3.3.5',
        level: 'AAA',
        roles: ['Content', 'Design'],
        title: { en: 'Help', nl: 'Hulp' },
        description: {
            original: {
                en: 'Context-sensitive help is available.',
                nl: 'Contextgevoelige hulp is beschikbaar.'
            },
            easy: {
                en: 'Provide help links or tooltips for complex forms or tasks.',
                nl: 'Zorg voor hulplinks of tooltips voor complexe formulieren of taken.'
            }
        },
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html'
    },
    {
        id: 'error-prevention-all',
        refId: '3.3.6',
        level: 'AAA',
        roles: ['Develop', 'Design'],
        title: { en: 'Error Prevention (All)', nl: 'Foutpreventie (Alle)' },
        description: {
            original: {
                en: 'For Web pages that require the user to submit information, at least one of the following is true: (1) Reversible, (2) Checked, (3) Confirmed.',
                nl: 'Voor webpagina\'s die vereisen dat de gebruiker informatie indient, is ten minste een van de volgende waar: (1) Omkeerbaar, (2) Gecontroleerd, (3) Bevestigd.'
            },
            easy: {
                en: 'Let users check and confirm their data before submitting ANY form.',
                nl: 'Laat gebruikers hun gegevens controleren en bevestigen voordat ze ELK formulier verzenden.'
            }
        }
    }
];
