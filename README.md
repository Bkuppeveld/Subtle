## Synopsis
Subtle.js is een animatie framework wat alleen gebruik maakt van HTML/CSS & Plain javascript.

## Code Example
Subtle werkt met zijn eigen classes subtle-bounce/wiggle, daarbij kan je ook de afstand en snelheid van de animatie bepalen. Standaard zijn er waardens ingesteld om het subtiele te krijgen waarover werd geschreven. Het instellen van de variabelen

	<div class="block subtle-bounce"  data-distance='50' data-speed='100'>bounce</div>
	<div class="block subtle-wiggle"  data-distance='50' data-speed='7'>wiggle</div>

## Motivation

Al snel dacht ik _"wat zijn die animaties van alle frameworks toch zo overdreven, is er geen subtielere manier om dit te doen."_ Met die gedachten ben ik aan de gang gegaan en zo is subtle.js geboren. Subtle.js is een zeer eenvoudig animatie framework die gebouwd is om subtiele simpele constante animaties op je website te tonen. Op dit moment zijn er twee animaties: de wiggle en bounce. Het horizontaal & verticaal bewegen van een object.

## Installation
..* index.html / een demo van het framework
..* style.css / voorbeeld van een css
..* subtle.js / het framework

In de HTML kan je data-sets meegeven om de waardens te veranderen.
Belangrijk de snelheid (SPEED) werkt als volgt: hoe lager het cijfer des te sneller en vloeiender.
De afstand werkt als volgt: hoe hoger het getal des te langer wordt de afstand.
CSS: de div's moeten altijd een position hebben (relative of fixed bijvoorbeeld).

## Tests

Het framework is meerdere keren getest door verschillende developers, ze ondervonden geen problemen en de installatie was makkelijk.

## License

MIT License

Copyright (c) [2017] [Bart Kuppeveld]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
