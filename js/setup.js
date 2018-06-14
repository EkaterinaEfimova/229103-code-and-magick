'use strict';

// Массивы исходных данных
var WIZARD_NAMES = ['Иван','Хуан Себастьян','Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Функция генерации случайного элемента массива
var randomElement = function (arr) {
  var random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}

// Показ окна настроек
var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

// Нахождение блока, в который добавляются похожие маги, и шаблона с версткой самих магов
var similarListElement = document.querySelector('.setup-similar-list');
var similrWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


// Массив с сгенерированными данными для создания похожих магов
var wizards = [
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_LASTNAMES),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_LASTNAMES),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_LASTNAMES),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  },
  {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_LASTNAMES),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  }
];

// Изменение шаблона волшебника
var renderWizards = function (wizard) {
  var wizardElement = similrWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

// Добавление похожих волшебников на страницу
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizards(wizards[i]));
 }
 similarListElement.appendChild(fragment);

// Показ окна с похожими магами
userSetup.querySelector('.setup-similar').classList.remove('hidden');