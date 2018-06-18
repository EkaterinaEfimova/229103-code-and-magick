'use strict';

// Массивы исходных данных
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;

// Функция генерации случайного элемента массива
var randomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Нахождение блока, в который добавляются похожие маги, и шаблона с версткой самих магов
var similarListElement = document.querySelector('.setup-similar-list');
var similrWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// Изменение шаблона волшебника
var renderWizards = function (wizard) {
  var wizardElement = similrWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Добавление похожих волшебников на страницу и изменение у них имени, цвета мантии и глаз
var fragment = document.createDocumentFragment();
for (var i = 0; i < NUMBER_WIZARDS; i++) {
  var wizard = {
    name: randomElement(WIZARD_NAMES) + ' ' + randomElement(WIZARD_LASTNAMES),
    coatColor: randomElement(COAT_COLOR),
    eyesColor: randomElement(EYES_COLOR)
  };
  fragment.appendChild(renderWizards(wizard));
}
similarListElement.appendChild(fragment);

// Показ окна настроек
var userSetup = document.querySelector('.setup');
userSetup.classList.remove('hidden');

// Показ окна с похожими магами
userSetup.querySelector('.setup-similar').classList.remove('hidden');
