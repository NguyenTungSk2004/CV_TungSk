const sr = ScrollReveal({
    origin: 'top',
    distance: '25px',
    duration: 2500,
    delay: 200,
})


sr.reveal(`.page-container`,{distance: '50px'})

// left column scrollreveal
sr.reveal(`.profile_name`,{distance: '50px'})
sr.reveal(`.profile_profession`, {distance:'40px',delay: 500})
sr.reveal(`.profile_perfil`, {distance: '50px', delay: 600})
sr.reveal(`.scroll_thongtin`, {delay: 700})
sr.reveal(`.scroll_thongtin_1`, {origin:'left',interval: 100,delay: 700})
sr.reveal(`.scroll_thongtin_2`, {origin:'left',interval: 200,delay: 800})

sr.reveal(`.skills`,{origin:'left', interval: 200, delay: 800})

// right column scrollreveal
sr.reveal(`.right-column`,{distance: '50px'})
sr.reveal(`.scroll_gt_1`, {origin:'right', distance:'50px', delay: 700})
sr.reveal(`.scroll_gt_2`, {origin: 'top', distance:'50px', interval: 100 ,delay: 800})   
