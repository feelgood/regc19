# Self assessment tests for Corona/Covid-19

## Background and current state

There exist a number of self assessment tests for Coronoa/Covid-19. They differ both in purpose and in construction.

All share the same basic purpose of helping people to assess if a person has or has had Corono/Covid-19. However they differ somewhat in regards to what the intended result of the assesment is to be.

Some end results are:

 * Assist people in deciding whether they should seek medical assistance.
 * Assist people in deciding whether they should stay at home.
 * Build a database of completed assessment tests in order to assess the overall status and spread of the disease.

Of course, some assessment tests are intended to be used to achieve a combination of these results, but many of the existing tests are clearly designed very much with only one, or the first two, of these end results in mind.

The construction of the tests also differs. Both in the design and in the questions asked. Apart from the fact that people solve the same problem in different ways, these differences are probably due to when in time the test was designed, and what was known about Corona/Covid-19 symptoms at the time the test was created. This is a fast moving situation and there also seem to be differences in symptoms in different populations due to underlying differences in population and social characteristcs.

The core challenge of trackning the spread of Corona/Covid-19 is the fact that **many who are infected do not show any symptoms**. So **to get a proper picture of the spread medicial testing is essential**. The regc19 health check is simply an **effort to try to get a picture of the spread, in the absence of large scale medical testing**.

## The purpose of regc19 health check

The main purpose of regc19 health check is to **build a database of completed assessment tests in order to assess the overall status and spread of the disease**.

Since people are much more inclined to fill out reports if they get feedback relevant for them selves, the regc19 assessment test will be designed so the person completing the test will get immediate feedback in the form of an assessment based on their report. **But regc19 will not make any recommendation as to whether the respondee should seek medical assistance or stay at home.** Regc19 will refer the respondee to follow the local medical guidelines and recommendations from local and national authorities, and if worried contact her/his local medical services.

## Inventory of self assessment tests

Here are some self assessment tests:

* SLL (Region Stockholm). URL: https://corona.sll.se/
* Maharashtra state, India. URL: https://covid-19.maharashtra.gov.in/
* Mayo Clinic, Minnesota, USA. URL: https://www.mayoclinic.org/covid-19-self-assessment-tool
* Ontario, Canada. URL: https://covid-19.ontario.ca/self-assessment

## The regc19 health check

### The key parameters/attributes

| Parameter/attribute | Values | Mandatory | Purpose | Source |
| --- | --- | --- | --- | --- |
| **Age range** | 5 year intervals from 0-5, etc. | No | Aid in assessing spread in age categories. Could be used by evaluation function together with other risk factors. | TBD. |
| **Gender** | F/M/X | No | Aid in assessing spread depending on gender. | TBD. |
| **Temperature** | t < 38C, 38C <= t <= 39,5, 39,5 < t | Yes | Use by evaluation function. | TBD. |
| **Symptoms** | Cough, Fatigue, Throat pain, Respiratory problems, ... | Yes | Used by evaluation function. | TBD. |
| **Period of illness** | From-date & to-date (what about multiple times? and how far back in time? February 1?) | Yes | Aid in assessing status and spread. Could be used by evaluation function. | TBD. |
| **Geographical tag** | Postnummer or region | Yes | Aid in assessing geographical spread | TBD.
| **Risk factors** | TBD. | No | Could be used by evaluation function. | TBD. |

By mandatory is meant; mandatory to complete the test. TBD = To Be Documented/Done/Defined!

### The evaluation function

This is a problem which is execptionally well suited for doing a machine learning based classification! However we do not have access to any good training set att the moment, so the evaluation function will be hand crafted. Of course in order to construct a good evaluation function for wide spread use, it must be validiated by medical professionals.

In the first version of the evaluation function we will not use risk factors, though they very probably are relevant. We try to keep it simple!

