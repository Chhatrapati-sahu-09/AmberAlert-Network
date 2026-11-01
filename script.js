const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const filters = $$('.filter');
const alertCards = $$('.alert-card');
const searchInput = $('#alertSearch');
const emptyState = $('#emptyState');

function applyAlertFilters() {
  const activeFilter = $('.filter.active')?.dataset.filter || 'all';
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  alertCards.forEach(card => {
    const statusMatch = activeFilter === 'all' || card.dataset.status === activeFilter;
    const searchMatch = (card.dataset.search || '').includes(query);
    const show = statusMatch && searchMatch;
    card.hidden = !show;
    if (show) visible += 1;
  });
  emptyState.hidden = visible > 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  applyAlertFilters();
}));
searchInput.addEventListener('input', applyAlertFilters);

const detailsDialog = $('#detailsDialog');
const detailContent = {
  sample: ['Sample alert case', 'This is fictional sample content used to demonstrate an active alert detail view. It is not a real missing-person case. In an actual deployment, only verified details from authorized public-safety sources should appear here.'],
  resolved: ['Demo record — resolved', 'This sample record demonstrates how a resolved alert can be shown. No real person, case, or location is represented.'],
  archive: ['Community notice — archived', 'This is a fictional archived update for layout testing. It contains no actual case information.']
};
$$('.details-button').forEach(button => button.addEventListener('click', () => {
  const [title, body] = detailContent[button.dataset.alert] || detailContent.sample;
  $('#detailTitle').textContent = title;
  $('#detailBody').textContent = body;
  detailsDialog.showModal();
}));
$('#closeDetails').addEventListener('click', () => detailsDialog.close());
$('#dismissDetails').addEventListener('click', () => detailsDialog.close());

const reportDialog = $('#reportDialog');
function openReport() {
  $('#formResult').hidden = true;
  $('#demoForm').reset();
  reportDialog.showModal();
}
$('#reportTop').addEventListener('click', openReport);
$('#closeReport').addEventListener('click', () => reportDialog.close());
$('#demoForm').addEventListener('submit', event => {
  event.preventDefault();
  $('#formResult').textContent = 'Demo preview only. Nothing was transmitted or saved. For a real incident, contact local emergency services.';
  $('#formResult').hidden = false;
});
$('#howButton').addEventListener('click', () => $('#how').scrollIntoView({ behavior: 'smooth' }));

$('#menuToggle').addEventListener('click', () => $('.nav-links').classList.toggle('open'));
$$('.nav-links a').forEach(link => link.addEventListener('click', () => $('.nav-links').classList.remove('open')));

[detailsDialog, reportDialog].forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
}));
