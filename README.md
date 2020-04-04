# regc19

regc19 is a simple app for people to register Covid-19 symptoms in the absence of proper medical tests.

It consists of (not yet!):

 * A frontend app for registration. A webbapp is probably better than a mobile app. Add a CAPTCHA to restrict scripting/bot attacks.
 * A backend API where registered data is stored.
 * A backend API where data can be accessed. An open API. No registration needed and no API-key.

# Description (English)

An application where anyone can go in and register:

 * I have been tested positive (with a test) #days ago and I am still ill.
 * I have been tested positive (with a test) #days ago but feel weel now since #days.
 * I am very sure I have Corona. I estimate that I have been sick for # days.
 * I am quite sure I have Corona. I estimate that I have been sick for # days.
 * I have not been sick for # days.
 * My postal code (postnummer in Sweden).

Registration is done anonymosuly. There is no registration of personal identity information such as mailadress,
mobila phone mumber etc. except for the postal code.

An additional feature is to have a self-assessment test of Covid-19 symptoms. The test would consist of 5-15 questions about symptoms and would result in an assessment score of say **90% chance, 60% chance, 30% chance** and **small risk of having Covid-19** assesment.

This would enable one to get a reasonable estimate of the number of infected and where they are geographically. Of course therer would be a lot of noise and risk of faulty assements, but in the absence of proper medical tests, one would get a reasonable estimate of the spread of Covid-19.

Some success factors:

 * As easy as possible to register data.
 * Minimize integrity issues.
 * Engage someone with medicial expertise to assess tha value of this idea and who can assist in developing the self-assesment test.

Suggested technologies:

 * Python for Backend.
 * MongoDB or Redis for persistance.
 * Vue-js for frontend.
# Description (Swedish)

En sajt där vem som helst kan gå in och registrera:

 * Jag är testad positiv med Corona och är sjuk.
 * Jag har testats positiv med Corona men mår bra nu.
 * Jag är väldigt säker på att jag har Corona. Bedömer att jag är på dag X
 * Jag är hyfsat säker på att jag har Corona. Bedömer att jag är på dag X
 * Jag har inte varit sjuk sedan 1 januari eller 1 februari eller 1 mars eller 1 april. Typ.
 * Sitt postnummer.

Man registrerar inget mer och det krävs inget registreringsförfarande eller inloggning.

Det som matas in hamnar i en backend-databas som har ett öppet publikt API som vem som helst kan anropa. Då kan vem som helst ladda hem data och göra kartor och grafer för att visualisera data och ta fram siffror. Får man bara in grunddatat kan man göra massor sen.

Ett steg bättre är att appen också har en "Corona self-assesment test" **där man svarar på typ 5-10 frågor om ens symptom som sedan resulterar i en klassning, typ det är 90%, 60%, 30% eller liten chans att du har eller har haft Corona.**

Då skulle man snabbt kunna få en rimlig uppskattning av antalet smittade och var de befinner sig. Självklart risk för brus och fel i rapporteringen, men i brist på riktiga tester skulle man - om många reggade sin "Coronahälsa" - kunna få en hyfsad bild på spridningen. Åtminstone bättre än man har nu! Man ska givetvis kunna gå in och fylla i igen en dag senare. Alla registreringar ska tidsstämplas.

Det som behövs är:

 * En frontend för registreringen. Troligen bäst med en webbapp. Lägg på en CAPTCHA så slipper man skript- och botsabotörer.
 * Ett backend API där man kan spara registreringen.
 * Ett backend API där man kan hämta ut data.

Några key success-faktorer är:

 * Enkelt som tusan att registera!
 * Minimera integritetsproblematiken!
 * Få tag på någon medicinskt kompetent som kan säga om detta skulle ge något och som kan vara med och utforma ett bra "Corona self-assesment test" för detta ändamål.
