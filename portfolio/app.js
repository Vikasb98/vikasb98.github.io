'use strict';

const projects = [
  {
    id:'loan-servicing', title:'Loan servicing & syndication', name:'Loan servicing & syndication',
    type:'Professional case study', category:'platforms', filters:['platforms'], art:'b2b',
    description:'Loan events, participant allocations, and lender-level cash flows.',
    tags:['Product ownership','Financial platforms','SQL'], cta:'Case study',
    summary:'Product ownership for loan-servicing capabilities, from requirements and event modeling to UAT and releases. A high-level account of enterprise product work.',
    role:'Product Owner · Loan Servicing', tools:'SQL · requirements · UAT · release planning',
    scope:'Professional experience, summarized without employer interfaces or proprietary implementation details.',
    context:'Private-credit operations involve connected events: a change to a loan or lender allocation can affect balances, interest, and cash flows. The product challenge is to make those dependencies usable and understandable for operations teams.',
    contributions:['Owned requirements and delivery for loan-servicing workflows, including rollover, merge, split, and indexation capabilities.','Enhanced syndication workflows for lender substitutions, participant allocations, balance transfers, and interest recalculation.','Helped deliver lender-level cash flows and used SQL to investigate behavior and validate product outcomes.','Worked with developers, QA, and operations stakeholders through backlog planning, UAT, and releases.'],
    outcome:'Expanded support for complex syndication events and lender-specific servicing. Detailed commercial results and transaction-level evidence are intentionally excluded.',
    thinking:'This work reflects a product approach grounded in event dependencies, edge cases, and operational validation. Validation focused on the effects of an event across balances, allocations, and downstream cash flows.',
    missing:'Approved screenshots and a narrated walkthrough have not been supplied.',
    chapters:['The operational problem and user journey','How loan events affect participant-level servicing','Requirements, validation, and release ownership'],
    demo:null
  },
  {
    id:'workflow', title:'Workflow management', name:'Configurable workflow management',
    type:'Case study + independent demo', category:'platforms', filters:['platforms','automation','prototype'], art:'workflow',
    description:'Recurring tasks, due-date rules, reminders, and workflow transitions.',
    tags:['Workflow design','Recurrence','Interactive demo'], cta:'Case study & demo',
    summary:'Configurable task-management capabilities for operational teams, paired with a small, independently recreated workflow demo using fictional tasks.',
    role:'Product Owner · Workflow Management', tools:'User stories · workflow rules · wireframes · UAT',
    scope:'Professional summary + independently created browser demo. No production screens or code are used.',
    context:'Repeatable operational work needs more structure than a simple to-do list. Tasks can recur, due dates can follow business-day rules, and teams need a clear route through completion.',
    contributions:['Delivered configurable recurring tasks, logical due dates, custom reminders, and categories or custom fields.','Defined subtasks and workflow transitions to support structured execution.','Translated operational needs into requirements, wireframes, acceptance criteria, and release validation.'],
    outcome:'Recurring task and workflow capabilities became part of regular operations. This portfolio focuses on the product capabilities rather than sharing internal adoption data.',
    thinking:'The independent demo focuses on one narrow interaction: moving synthetic tasks from queue to review to completion. A separate recurrence example illustrates how a weekend date can roll to a business day. It is a portfolio illustration, not a reproduction of the employer’s rule engine.',
    missing:'Production assets are excluded. A demo recording is still to be added.',
    chapters:['The recurring-work problem','A synthetic task moving through three states','Business-day due-date behavior'], demo:'workflow'
  },
  {
    id:'ai-onboarding', title:'AI-assisted onboarding', name:'AI-assisted agreement onboarding',
    type:'Case study + independent demo', category:'ai', filters:['ai','platforms','prototype'], art:'ai',
    description:'Facility-agreement extraction with human review.',
    tags:['Applied AI','Human review','Azure OpenAI'], cta:'Case study & demo',
    summary:'An AI-assisted onboarding feature for long facility agreements, with human review built into the workflow. The accompanying demo uses a short fictional agreement and deterministic sample results.',
    role:'Product ownership · AI-assisted onboarding', tools:'Azure OpenAI / GPT · requirements · scenario validation',
    scope:'High-level professional summary. The interactive example is a deterministic UI simulation with synthetic content.',
    context:'Onboarding a deal from a long facility agreement requires finding relevant terms and transferring them into structured fields. The original workflow involved agreements of more than 200 pages and significant manual review.',
    contributions:['Helped launch LLM-based extraction for facility-agreement onboarding.','Kept users in control by allowing extracted values to be reviewed and corrected.','Iterated through scenario testing, operational UAT, and user feedback.'],
    metric:'60 → 7 min', metricLabel:'Reported onboarding time per deal. Approximately 3 minutes of AI processing + 4 minutes of human review.',
    outcome:'The reported change is approximately an 88% reduction in onboarding effort. It is a historical professional outcome, not a benchmark produced by this website or its demo.',
    thinking:'The portfolio example makes the review boundary visible: values are tied to a synthetic source passage, one field needs explicit confirmation, and the user can review it before completion. It does not make a live model call or claim measured extraction accuracy.',
    missing:'Approved source documents, evaluation datasets, and production screenshots are excluded. A walkthrough video has not been supplied.',
    chapters:['The manual onboarding bottleneck','Extraction with review and correction','Validation approach and reported workflow outcome'], demo:'extraction'
  },
  {
    id:'automation', title:'API + UI automation', name:'Hybrid API + UI automation',
    type:'Case study + independent demo', category:'automation', filters:['automation','prototype'], art:'automation',
    description:'API and browser checks using Playwright and PyTest.',
    tags:['Python','Playwright','PyTest'], cta:'Case study & demo',
    summary:'A hybrid API–UI automation framework using Playwright and PyTest, with AI-assisted run summaries. The portfolio runner is an illustrative simulation of coverage selection.',
    role:'Hands-on framework building · product validation', tools:'Python · Playwright · PyTest · API + browser automation',
    scope:'Professional summary with an independently created simulated runner. No employer endpoints, scripts, or test data are included.',
    context:'Repeating a full manual or UI-heavy validation sequence across deals can make feedback slow. The work combined API and UI steps to reduce repetitive execution and present a concise run summary.',
    contributions:['Built a hybrid framework that combines API-driven setup and validation with browser interactions.','Used Playwright and PyTest for automation and repeatable checks.','Added an AI-summarized run report to make results easier to review.'],
    metric:'~4 hr → ~8 min', metricLabel:'Reported batch runtime after automation. Historical internal workflow; not independently benchmarked here.',
    outcome:'The reported batch time fell from roughly four hours to eight minutes. Runtime depends on the original workflow and environment; the browser simulation does not reproduce or measure that system.',
    thinking:'The independently created runner shows how a reviewer can select example scenarios and inspect a readable summary. It deliberately does not connect to any real application, API, or infrastructure.',
    missing:'Framework source, real run logs, and employer test artifacts are excluded. A synthetic walkthrough recording is to be added.',
    chapters:['Why repeated validation was slow','The API and UI split at a conceptual level','Coverage selection and a readable run summary'], demo:'runner'
  },
  {
    id:'rolefit', title:'PM résumé scorer', name:'RoleFit · PM résumé scorer',
    type:'Independent project', category:'ai', filters:['ai'], art:'rolefit',
    description:'An independent résumé-to-job-description comparison tool.',
    tags:['Independent build','Career tooling','Working app'], cta:'Project details',
    summary:'An independent résumé scorer project for product management roles, created to support résumé review and job-description alignment. A separate hosted app is available.',
    role:'Independent project · product concept and iteration', tools:'Résumé analysis · job-description alignment · browser app',
    scope:'Independent work outside employer systems. The hosted app has its own private access controls.',
    context:'Comparing a product-management résumé with a job description can help identify missing evidence, unclear positioning, and relevant skills to make more visible.',
    contributions:['Defined a PM-focused résumé review and scoring project.','Iterated on extracting text directly from uploaded résumés rather than requiring duplicate manual entry.','Pursued an online experience accessible from desktop and mobile.'],
    outcome:'A working private app is linked below. Its score should be treated as an advisory signal, not an employer’s ATS result or a prediction of an interview invitation.',
    thinking:'The portfolio contains no candidate data. No claims are made here about matching proprietary ATS algorithms, universal résumé scores, or verified hiring outcomes.',
    missing:'A walkthrough video and approved real project screenshots have not been supplied.',
    chapters:['The résumé-review problem','Using the scorer and interpreting its feedback','What a score can and cannot tell you'], demo:null,
    external:'https://rolefit-pm-vikas.hazyboar512.chatgpt.site'
  },
  {
    id:'rag-lab', title:'Local RAG experiments', name:'Local RAG experiments',
    type:'Independent experiment', category:'ai', filters:['ai'], art:'rag',
    description:'Local retrieval experiments with watsonx, LangChain, and Gradio.',
    tags:['RAG','LangChain','Gradio'], cta:'Experiment notes',
    summary:'Independent experimentation with local retrieval-augmented generation using IBM watsonx, LangChain, and Gradio. This entry is a concise project brief until source assets and a demo are supplied.',
    role:'Independent learner & builder', tools:'IBM watsonx · LangChain · Gradio',
    scope:'Independent experiment. No deployed demo, source repository, or validated benchmark has been supplied for this entry.',
    context:'Building a small RAG interface is a way to investigate how retrieval, document context, and model responses fit together beyond a standalone chat prompt.',
    contributions:['Experimented with a local RAG setup using IBM watsonx, LangChain, and Gradio.','Used hands-on prototyping to explore retrieval-based AI interfaces.'],
    outcome:'This is a learning experiment. Retrieval quality, dataset size, latency, and production readiness are not claimed here; supporting results and demo assets are still to be added.',
    thinking:'A future walkthrough can use a public or synthetic document set and show both a grounded answer and a retrieval failure.',
    missing:'Repository, evaluation results, screenshots, and demo video are placeholders pending supplied assets.',
    chapters:['A public or synthetic document set','A retrieval-grounded answer and its context','A failure case and what to improve next'], demo:null
  }
];

const grid = document.querySelector('#projects');
const dialog = document.querySelector('#case-dialog');
const caseContent = document.querySelector('#case-content');
const search = document.querySelector('#project-search');
let activeFilter='all';
let currentProject=null;
let lastOpener=null;
let toastTimeout;
let tasks=[];
let recurrenceAdjusted=false;
let extractionDone=false;
let extractionReviewed=false;
let runnerDone=false;

function renderProjects(){
  const term=search.value.trim().toLowerCase();
  const visible=projects.filter(p=>(activeFilter==='all'||p.filters.includes(activeFilter))&&[p.name,p.title,p.description,p.type,...p.tags].join(' ').toLowerCase().includes(term));
  grid.innerHTML=visible.map(p=>`<article class="project-card"><div class="card-body"><p class="card-eyebrow">${p.type}</p><h3>${p.name}</h3><p class="card-description">${p.description}</p><div class="card-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="card-bottom"><span>${p.cta}</span><span aria-hidden="true">→</span></div></div><button class="project-link" data-open="${p.id}" aria-label="${p.cta}: ${p.name}"></button></article>`).join('');
  document.querySelector('#empty-state').hidden=visible.length>0;
  document.querySelector('#result-count').textContent=`Showing ${visible.length} project${visible.length===1?'':'s'}`;
  document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===activeFilter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
}

document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;renderProjects();}));
search.addEventListener('input',renderProjects);
document.querySelector('#reset-filters').addEventListener('click',()=>{activeFilter='all';search.value='';renderProjects();search.focus();});
grid.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b){lastOpener=b;location.hash=`case/${b.dataset.open}/overview`;}});

function overview(p){return `${p.metric?`<div class="outcome"><strong>${p.metric}</strong><p>${p.metricLabel}</p></div>`:''}<h3>The problem</h3><p>${p.context}</p><h3>My contribution</h3><ul>${p.contributions.map(c=>`<li>${c}</li>`).join('')}</ul><h3>Outcome & evidence</h3><p>${p.outcome}</p>${p.external?`<div class="demo-actions"><a class="button primary" href="${p.external}" target="_blank" rel="noopener noreferrer">Open private RoleFit app ↗</a></div><p class="demo-note">Opens separately. Access is governed by the app’s existing private settings. No résumé is uploaded from this portfolio.</p>`:''}<h3>Product thinking & validation</h3><p>${p.thinking}</p><div class="scope-note"><p>${p.scope}</p></div>`;}

function prototype(p){
  if(p.demo==='workflow') return workflowDemo();
  if(p.demo==='extraction') return extractionDemo();
  if(p.demo==='runner') return runnerDemo();
  if(p.external) return `<div class="placeholder-panel"><span class="placeholder-tag">WORKING PRIVATE APP</span><div class="placeholder-icon">↗</div><h3>Explore RoleFit</h3><p>The résumé scorer runs as a separate private app. Its scoring is advisory and does not replicate proprietary employer ATS systems.</p><div class="demo-actions" ><a class="button primary" href="${p.external}" target="_blank" rel="noopener noreferrer">Open private app ↗</a></div></div>`;
  return `<div class="placeholder-panel"><span class="placeholder-tag">ASSET PLACEHOLDER</span><div class="placeholder-icon">◇</div><h3>Prototype to be added</h3><p>${p.missing}</p></div><p class="demo-note">The overview is available. No missing asset is presented as a functioning prototype.</p>`;
}

function video(p){return `<div class="placeholder-panel"><span class="placeholder-tag">VIDEO PLACEHOLDER</span><div class="placeholder-icon" aria-hidden="true">▷</div><h3>Walkthrough video to be added</h3><p>No recording has been supplied for this project. This is a labeled asset placeholder.</p></div><div class="video-chapters"><p>Suggested recording outline · not an existing video</p><ol>${p.chapters.map(c=>`<li>${c}</li>`).join('')}</ol></div>`;}

function resetDemo(){tasks=[{id:1,title:'Review sample facility',owner:'Fictional Ops team',state:0},{id:2,title:'Validate sample cash flow',owner:'Fictional QA team',state:1},{id:3,title:'Complete sample checklist',owner:'Fictional Ops team',state:2}];recurrenceAdjusted=false;extractionDone=false;extractionReviewed=false;runnerDone=false;}

function renderCase(p,tab='overview'){
  const index=projects.indexOf(p);
  if(currentProject!==p.id){resetDemo();currentProject=p.id;}
  const tabs=[['overview','Overview'],['prototype',p.demo?'Interactive demo':p.external?'Live app':'Prototype'],['video','Video']];
  caseContent.innerHTML=`<div class="case-topbar"><span>VIKAS B / SELECTED WORK / ${String(index+1).padStart(2,'0')}</span><button class="close-case" data-close>Back to portfolio <span aria-hidden="true">×</span></button></div><div class="case-scroller"><div class="case-hero"><p class="eyebrow">${p.type.toUpperCase()}</p><h2 id="case-title" tabindex="-1">${p.title}</h2><p>${p.summary}</p><div class="case-tabs" role="tablist" aria-label="Case-study sections">${tabs.map(([id,label])=>`<button id="tab-${id}" class="case-tab ${tab===id?'active':''}" role="tab" aria-selected="${tab===id}" aria-controls="case-panel" tabindex="${tab===id?'0':'-1'}" data-tab="${id}">${label}${id==='video'?'<small>To add</small>':id==='prototype'&&!p.demo&&!p.external?'<small>To add</small>':''}</button>`).join('')}</div></div><div class="case-body"><article class="case-article" id="case-panel" role="tabpanel" aria-labelledby="tab-${tab}" tabindex="0">${tab==='overview'?overview(p):tab==='prototype'?prototype(p):video(p)}</article><aside class="case-aside" aria-label="Project details"><div class="aside-group"><span class="micro">PROJECT</span><p>${p.name}</p></div><div class="aside-group"><span class="micro">MY ROLE</span><p>${p.role}</p></div><div class="aside-group"><span class="micro">TOOLKIT & METHODS</span><p>${p.tools}</p></div><div class="aside-group asset-state"><strong>Asset status</strong><p>${p.missing}</p></div></aside></div></div><div class="case-bottom"><button class="case-nav" data-prev>← Previous project</button><span>${index+1} OF ${projects.length}</span><button class="case-nav" data-next>Next project →</button></div>`;
}

function route(){
  const match=location.hash.match(/^#case\/([a-z-]+)(?:\/(overview|prototype|video))?$/);
  const p=match&&projects.find(p=>p.id===match[1]);
  if(p){const wasOpen=dialog.open;const keepTabFocus=document.activeElement?.hasAttribute('data-tab');renderCase(p,match[2]||'overview');if(!wasOpen){dialog.showModal();document.body.classList.add('modal-open');document.querySelector('#case-title').focus();}else if(keepTabFocus){document.querySelector(`#tab-${match[2]||'overview'}`).focus();}}
  else if(dialog.open){dialog.close();document.body.classList.remove('modal-open');currentProject=null;if(lastOpener?.isConnected)lastOpener.focus({preventScroll:true});}
}

caseContent.addEventListener('click',e=>{
  if(e.target.closest('[data-close]')){location.hash='work';return;}
  const tab=e.target.closest('[data-tab]');if(tab){location.hash=`case/${currentProject}/${tab.dataset.tab}`;return;}
  const index=projects.findIndex(p=>p.id===currentProject);
  if(e.target.closest('[data-next]')){location.hash=`case/${projects[(index+1)%projects.length].id}/overview`;return;}
  if(e.target.closest('[data-prev]')){location.hash=`case/${projects[(index+projects.length-1)%projects.length].id}/overview`;return;}
  const move=e.target.closest('[data-move]');if(move){const task=tasks.find(t=>t.id===Number(move.dataset.move));task.state=Math.min(task.state+1,2);refreshDemo();announce(task.title+(task.state===2?' completed.':' moved to review.'));return;}
  if(e.target.closest('[data-reset-workflow]')){resetDemo();refreshDemo();return;}
  if(e.target.closest('[data-recurrence]')){recurrenceAdjusted=true;refreshDemo();return;}
  if(e.target.closest('[data-extract]')){extractionDone=true;refreshDemo();return;}
  if(e.target.closest('[data-review]')){extractionReviewed=true;refreshDemo();announce('Margin confirmed: 275 basis points.');return;}
  if(e.target.closest('[data-reset-extraction]')){extractionDone=false;extractionReviewed=false;refreshDemo();return;}
  if(e.target.closest('[data-run]')){const checked=[...caseContent.querySelectorAll('[name="scenario"]:checked')].map(x=>x.value);runnerDone=checked.length?checked:[];refreshDemo();return;}
});

caseContent.addEventListener('keydown',e=>{
  const tab=e.target.closest('[data-tab]');if(!tab)return;
  const ids=['overview','prototype','video'];let index=ids.indexOf(tab.dataset.tab);
  if(e.key==='ArrowRight')index=(index+1)%3;else if(e.key==='ArrowLeft')index=(index+2)%3;else if(e.key==='Home')index=0;else if(e.key==='End')index=2;else return;
  e.preventDefault();location.hash=`case/${currentProject}/${ids[index]}`;
  requestAnimationFrame(()=>document.querySelector(`#tab-${ids[index]}`)?.focus());
});
dialog.addEventListener('cancel',e=>{e.preventDefault();location.hash='work';});
window.addEventListener('hashchange',route);

function announce(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('visible'),2500);}
function refreshDemo(){const p=projects.find(x=>x.id===currentProject);document.querySelector('#case-panel').innerHTML=prototype(p);}
function demoLabel(message){return `<div class="demo-label"><i></i>${message}</div>`;}

function workflowDemo(){return `${demoLabel('INDEPENDENT UI RECREATION · SYNTHETIC TASKS · CHANGES LAST ONLY IN THIS VIEW')}<div class="demo-shell"><div class="demo-bar"><span>Flowdesk / Operations</span><small>Portfolio demo</small></div><div class="demo-content"><div class="demo-board">${['Queued','In review','Complete'].map((label,state)=>`<div class="demo-lane"><h4>${label.toUpperCase()} <span>${tasks.filter(t=>t.state===state).length}</span></h4>${tasks.filter(t=>t.state===state).map(t=>`<div class="demo-task ${state===2?'is-done':''}"><b>${t.title}</b><small>${t.owner}</small>${state<2?`<button class="task-move" data-move="${t.id}">${state===0?'Start review →':'Complete ✓'}</button>`:'<span class="review-badge ok">Complete ✓</span>'}</div>`).join('')}</div>`).join('')}</div><div class="demo-actions"><button class="text-button" data-reset-workflow>Reset demo</button></div></div></div><h3>Business-day due dates</h3><p>A fictional recurring review falls on Sunday, 1 November 2026. In this illustration, weekend due dates roll forward to the next weekday; holidays are not modeled.</p>${recurrenceAdjusted?'<div class="demo-feedback" role="status">Next due date: <strong>Monday, 2 November 2026</strong><br>Sunday → next weekday. This is a synthetic example.</div>':'<button class="button secondary" data-recurrence>Apply business-day rule →</button>'}<p class="demo-note">This three-state board and weekend rule were built for the portfolio. They do not reproduce an employer’s interface, configuration, or implementation.</p>`;}

function extractionDemo(){return `${demoLabel('DETERMINISTIC UI SIMULATION · SYNTHETIC AGREEMENT · NO MODEL CALL OR FILE UPLOAD')}<div class="demo-shell"><div class="demo-bar"><span>Document → review → confirm</span><small>Sample only</small></div><div class="demo-content"><div class="demo-source"><small>FICTIONAL EXCERPT / CREATED FOR THIS DEMO</small>Example Cedar Facility provides a commitment of USD 12,000,000. The facility matures on 30 June 2031. The applicable margin is 2.75% per annum.</div>${!extractionDone?'<button class="button primary" data-extract>Show sample extraction →</button>':`<table class="extraction-table"><thead><tr><th scope="col">FIELD</th><th scope="col">SAMPLE VALUE</th><th scope="col">REVIEW STATE</th></tr></thead><tbody><tr><td>Currency</td><td>USD</td><td><span class="review-badge ok">Source matched</span></td></tr><tr><td>Commitment</td><td>12,000,000</td><td><span class="review-badge ok">Source matched</span></td></tr><tr><td>Maturity</td><td>2031-06-30</td><td><span class="review-badge ok">Source matched</span></td></tr><tr><td>Margin</td><td>${extractionReviewed?'275 bps':'2.75% → 275 bps?'}</td><td><span class="review-badge ${extractionReviewed?'ok':''}">${extractionReviewed?'Confirmed':'Needs confirmation'}</span></td></tr></tbody></table>${extractionReviewed?'<div class="demo-feedback" role="status">Margin conversion confirmed. Review remains part of the workflow; no live agreement or model output is involved.</div>':'<div class="demo-actions"><button class="button primary" data-review>Confirm margin: 275 bps ✓</button></div>'}<button class="text-button" data-reset-extraction>Reset sample</button>`}</div></div><h3>Review step</h3><p>The sample separates an extracted value from a user-confirmed value. In a real product, this boundary needs evaluation, source traceability, and a clear path for corrections.</p><p class="demo-note">All displayed extraction values are hardcoded for this example. No accuracy, confidence, or production-performance claim is inferred from the demo.</p>`;}

function runnerDemo(){const choices=['Allocation balance','Workflow transition','Interest recalculation'];return `${demoLabel('SIMULATED RUNNER · FICTIONAL SCENARIOS · NO API OR BROWSER TESTS ARE EXECUTED')}<div class="demo-shell"><div class="demo-bar"><span>Validation / illustrative coverage</span><small>Portfolio demo</small></div><div class="demo-content"><div class="scenario-options">${choices.map((c,i)=>`<label><input name="scenario" type="checkbox" value="${i}" ${!Array.isArray(runnerDone)||runnerDone.includes(String(i))?'checked':''}>${c}</label>`).join('')}</div><button class="button primary" data-run>Simulate selected checks →</button>${Array.isArray(runnerDone)?runnerDone.length?`<pre class="demo-logs" aria-live="polite">SIMULATION — no real tests executed\n${runnerDone.map(i=>`✓ ${choices[Number(i)]}: sample pass`).join('\n')}\n\n${runnerDone.length}/${runnerDone.length} illustrative checks complete.\nSummary: selected sample scenarios passed.</pre>`:'<div class="demo-feedback" role="status">Choose at least one sample scenario, then run the simulation.</div>':'<p class="demo-note">Select the example coverage you want to inspect. Results are predetermined to illustrate the report experience.</p>'}</div></div><h3>Run summary</h3><p>A useful run report should explain which scenarios were exercised and what needs attention. This simulated view illustrates the reporting interaction without revealing an internal framework or connecting to real systems.</p>`;}

renderProjects();
route();
