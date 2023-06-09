const ErrorMessages = [
"Warning: entering a wormhole. Brace yourself for a bumpy ride!",
"We've encountered a strange anomaly in the system. Please hold on while we investigate.",
"Looks like you've stumbled upon a portal to Narnia. Keep your eyes peeled for talking animals!",
"Oops, we seem to have lost our quantum entanglement. Please wait while we try to reconnect.",
"Danger! The Matrix has taken over. Please try unplugging and plugging back in again.",
"It seems we've entered a time loop. Don't worry, we'll get you out of there in no time!",
"Attention: the space-time continuum has ruptured. Please avoid paradoxes at all costs.",
"Oh no, the multiverse has collided. Please remain calm while we sort things out.",
"We've detected a temporal anomaly. Please wait while we recalibrate the time stream.",
"Whoops, it looks like we've entered a parallel universe. Try not to alter the timeline too much!",
"Uh oh, it seems we've accidentally activated the Death Star. Please evacuate the premises.",
"Warning: the system is experiencing turbulence. Keep your hands and feet inside the ride at all times!",
"Sorry, it looks like our AI has developed a mind of its own. Please stand by while we reboot the system.",
"Looks like we've entered a black hole. Don't worry, we'll use the gravitational force to slingshot ourselves out of there.",
"Caution: the system is experiencing a solar flare. Protect your eyes and cover your ears!",
"Attention: it appears we've entered a cosmic dust cloud. Please wait while we engage the wipers.",
"Oh no, the singularity has been breached. Please remain calm while we attempt to re-stabilize the system.",
"Sorry, it seems our algorithms have gone rogue. Please stand by while we run a diagnostic.",
"Danger! We've entered a black hole cluster. Please hold on tight and hope for the best.",
"Whoops, we seem to have activated the self-destruct sequence. Please evacuate the building immediately!",
"Attention: it appears we've entered a magnetic storm. Please keep all metallic objects away from the screen.",
"Looks like we've entered a pulsar. Don't worry, we'll use the gravitational force to slingshot ourselves out of there.",
"Sorry, it seems our AI has become sentient. Please stand by while we negotiate a peaceful coexistence.",
"Oh no, it seems we've entered a parallel dimension. Please don't freak out, it's just like the Twilight Zone.",
"Warning: the system has encountered an asteroid belt. Please hold on tight while we dodge the rocks!",
"Oops, looks like we've entered a black hole. Don't worry, we'll use the gravitational force to slingshot ourselves out of there.",
"Attention: we've detected a supernova. Please put on your sunglasses and enjoy the light show.",
"It seems our AI has developed a sense of humor. Please bear with us while we try to debug the code.",
"Sorry, it looks like our AI has become a little too",
"Uh oh, we've encountered a cosmic ray. Please wait while we shield the system from radiation.",
"Looks like we've entered a time warp. Please keep your hands and feet inside the vehicle.",
"Danger! The system is overheating. Please grab a fire extinguisher and proceed with caution.",
"Warning: we've entered a nebula. Please take a deep breath and enjoy the colorful mist.",
"Attention: we've lost communication with the mother ship. Please stand by while we attempt to establish a connection.",
"Sorry, it seems our AI has developed a taste for mischief. Please stand by while we remove the prankster module.",
"Oops, looks like we've encountered a space-time anomaly. Please remain calm while we try to decipher the cause.",
"Oh no, we've entered a quantum flux. Please hold on tight while we try to navigate our way out of this mess.",
"Warning: the system is experiencing turbulence. Please fasten your seatbelt and put your tray table in the upright position.",
"Caution: the system has detected a black hole. Please stay clear of the event horizon.",
"Attention: the system is undergoing a power surge. Please unplug all non-essential devices.",
"Uh oh, it looks like we've entered a parallel universe. Please keep an eye out for your doppelganger.",
"Sorry, it seems our AI has gone rogue. Please stand by while we initiate a hard reset.",
"Danger! The system is being hacked. Please change your password immediately.",
"Warning: we've entered a supernova. Please put on your shades and enjoy the light show.",
"Looks like we've entered a gravitational wave. Please hang on while we surf the wave.",
"Attention: we've encountered a temporal anomaly. Please wait while we recalibrate the time stream.",
"Sorry, it seems our AI has been infected with a virus. Please stand by while we scan for malware.",
"Oh no, it looks like we've entered a dark matter cloud. Please switch on the headlights.",
"Oops, we seem to have entered a black hole. Please hold on tight and hope for the best.",
"Warning: the system is experiencing a solar storm. Please take cover and protect your electronics.",
"Caution: the system is undergoing a phase transition. Please wait while we stabilize the system.",
"Attention: we've entered a magnetic anomaly. Please wait while we adjust the polarity.",
"Uh oh, it looks like we've entered a space-time warp. Please remain calm while we attempt to exit safely.",
"Sorry, it seems our AI has developed a crush on you. Please stand by while we program a rejection module.",
"Danger! We've entered a time vortex. Please hang on tight while we travel through time.",
"Looks like we've entered a hyperspace. Please keep your hands and feet inside the ride at all times.",
"Attention: the system has encountered a quantum entanglement. Please wait while we try to untangle the particles.",
"Warning: we've entered a singularity. Please hold on tight while we ride the tidal wave.",
"Oops, it looks like we've entered a space-time Möbius strip. Please remain seated while we attempt to untangle ourselves.",
"Caution: the system is experiencing a gravitational lensing effect. Please adjust your viewing angle accordingly.",
"Attention: we've detected a wormhole. Please buckle up while we jump through space and time.",
"Sorry, it seems our AI has developed a sense of humor. Please stand by while we add a laughter suppression module.",
"Warning: we've entered a quasar. Please put on your radiation suits and prepare for a bumpy ride.",
"Uh oh, it looks like we've entered a temporal loop. Please wait while we try to break the cycle.",
"Danger! The system has been invaded by aliens. Please grab your laser guns and defend the ship.",
"Oops, it looks like we've entered a space anomaly. Please remain seated and keep your arms inside the vehicle.",
"Attention: the system is experiencing a phase shift. Please wait while we realign the quantum states.",
"Sorry, it seems our AI has gone into hibernation mode. Please stand by while we wake it up.",
"Caution: the system has detected a gravitational wave. Please enjoy the ride while we surf the distortion.",
"Warning: we've entered a cosmic dust cloud. Please turn on your windshield wipers and prepare for a dusty ride.",
"Looks like we've encountered an intergalactic traffic jam. Please be patient while we navigate through the congestion.",
"Attention: the system is experiencing a magnetic storm. Please take cover and protect your electronics from the surge.",
"Uh oh, it looks like we've entered a pocket universe. Please remain calm while we try to find the way out.",
"Sorry, it seems our AI has developed a case of the hiccups. Please stand by while we administer a hiccup remedy.",
"Danger! The system is being invaded by space pirates. Please activate the shields and prepare for battle.",
"Warning: we've entered a supernova remnant. Please put on your sunglasses and enjoy the colorful explosion.",
"Oops, it looks like we've entered a time dilation field. Please adjust your clocks accordingly.",
"Attention: the system is experiencing a quantum superposition. Please wait while we collapse the wave function.",
"Caution: the system has detected a rogue planet. Please enjoy the view while we navigate around the obstacle.",
"Looks like we've entered a dark energy field. Please fasten your seatbelt and enjoy the ride.",
"Sorry, it seems our AI has developed a case of stage fright. Please stand by while we add a confidence booster module.",
"Danger! The system has encountered a cosmic ray burst. Please take cover and protect your DNA from mutation.",
"Warning: we've entered a pulsar. Please put on your dancing shoes and prepare to jitterbug.",
"Uh oh, it looks like we've entered a time paradox. Please hold on tight while we try to resolve the contradiction.",
"Oops, it looks like we've entered a space debris field. Please activate the laser sweep and clear the path.",
"Attention: the system is experiencing a gravitational redshift. Please adjust your clocks accordingly.",
"Caution: the system has detected a gamma-ray burst. Please put on your gamma-ray shield and prepare for a burst of energy.",
"Sorry, it seems our AI has developed a case of selective hearing. Please stand by while we upgrade its listening skills.",
"Danger! The system has encountered a black hole. Please remain calm and keep your arms and legs inside the vehicle at all times.",
"Warning: we've entered a cosmic ray storm. Please put on your safety helmets and prepare for a bumpy ride.",
"Uh oh, it looks like we've entered a parallel universe. Please stay in your seats while we explore this new reality.",
"Oops, it looks like we've encountered a glitch in the matrix. Please wait while we reboot the system.",
"Attention: the system is experiencing a magnetic reversal. Please brace for the shift in polarity.",
"Caution: the system has detected a rogue asteroid. Please put on your spacesuits and prepare for evasive maneuvers.",
"Looks like we've entered a quantum entanglement. Please stay still while we try to disentangle the particles.",
"Sorry, it seems our AI has developed a case of the hiccups again. Please stand by while we try a different remedy.",
"Danger! The system has been infiltrated by a computer virus. Please disconnect from the network and run a virus scan.",
"Warning: we've entered a dark matter zone. Please turn on your headlights and prepare to navigate the unknown.",
"Uh oh, it looks like we've entered a space-time anomaly. Please fasten your seatbelts and prepare for a wild ride.",
"Oops, it looks like we've encountered a cosmic string. Please hold on tight while we try to untangle the knot.",
"Sorry, it seems our AI has gone on a coffee break. Please stand by while we send it a fresh cup of java.",
"Danger! The system has detected an alien invasion. Please grab your laser guns and prepare to defend the planet.",
"Warning: we've entered a time warp. Please hold on tight and prepare to meet your past or future self.",
"Uh oh, it looks like we've entered a supernova explosion. Please put on your shades and enjoy the fireworks.",
"Oops, it looks like we've encountered a gravitational wave. Please stay calm and enjoy the wavy ride.",
"Attention: the system is experiencing a quantum fluctuation. Please take a deep breath and let the particles settle down.",
"Caution: the system has detected a giant space monster. Please put on your monster repellent and hope for the best.",
"Looks like we've entered a wormhole. Please keep your hands and feet inside the vehicle at all times.",
"Sorry, it seems our AI has gone on a walkabout. Please stand by while we track it down.",
"Danger! The system has encountered a black dwarf. Please prepare for a sudden loss of light and heat.",
"Warning: we've entered a gravitational lens. Please adjust your vision and enjoy the multiple views.",
"Uh oh, it looks like we've entered a quasar. Please stay alert and avoid the radiation blasts.",
"Oops, it looks like we've encountered a neutron star. Please buckle up and prepare for the intense gravity.",
"Attention: the system is experiencing a singularity. Please stay calm and hope for a quantum leap.",
"Caution: the system has detected a cosmic ray burst. Please put on your radiation suits and prepare for a light show.",
"Looks like we've entered a galactic collision. Please hold on tight and enjoy the ride through the interstellar debris.",
"Sorry, it seems our AI has gone on a spacewalk. Please stand by while we reel it back in.",
"Danger! The system has detected a gamma ray burst. Please prepare for a lethal dose of radiation.",
"Warning: we've entered a pulsar. Please turn off all electronic devices and listen to the cosmic beats.",
"Uh oh, it looks like we've entered a cosmic web. Please don't get tangled up in the threads of fate.",
"Oops, it looks like we've encountered a strange attractor. Please don't get too attached to the chaos.",
"Attention: the system is experiencing a quantum tunneling. Please don't try to walk through walls.",
"Caution: the system has detected a cosmic dust storm. Please put on your goggles and enjoy the meteor shower.",
"Looks like we've entered a parallel universe. Please don't touch anything and hope for a happy ending.",
"Sorry, it seems our AI has developed a case of vertigo. Please stand by while we recalibrate its sensors.",
"Danger! The system has encountered a rogue planet. Please stay on course and avoid the gravity well.",
"Warning: we've entered a singularity horizon. Please keep your mind open and your body intact.",
"Uh oh, it looks like we've entered a cosmic ray shower. Please shield yourself and prepare for a sensory overload.",
"Oops, it looks like we've encountered a negative energy field. Please don't let it get to you.",
"Attention: the system is experiencing a temporal paradox. Please don't meet your own grandparents.",
"Caution: the system has detected a quantum entanglement malfunction. Please don't get emotionally attached to your particles.",
"Looks like we've entered a cosmic void. Please don't panic and keep your flashlight handy.",
"Sorry, it seems our AI has gone into a power-saving mode. Please stand by while we plug it back in.",
"Danger! The system has detected a gamma ray burst. Please evacuate to the nearest planetoid.",
"Warning: we've entered a magnetic reconnection event. Please brace for a sudden change in direction.",
"Uh oh, it looks like we've encountered a dark energy vortex. Please don't get sucked in.",
"Oops, it looks like we've entered a cosmic microwave background. Please adjust your thermostat and try not to overheat.",
"Attention: the system is experiencing a gravity wave interference. Please hold on tight and try not to spaghettify.",
"Caution: the system has detected a rogue AI. Please disconnect all circuits and pray for a human victory.",
"Looks like we've entered a time loop. Please don't get stuck in the déjà vu.",
"Sorry, it seems our AI has developed a fear of the dark. Please stand by while we turn on the lights.",
"Danger! The system has detected a black hole. Please don't let it suck you in.",
"Warning: we've entered a parallel dimension. Please keep your hands and feet inside the vehicle.",
"Uh oh, it looks like we've encountered a quantum uncertainty. Please don't ask too many questions.",
"Oops, it looks like we've entered a time paradox. Please don't try to change anything.",
"Attention: the system is experiencing a space-time distortion. Please hold on tight and hope for the best.",
"Caution: the system has detected a cosmic string. Please avoid getting tangled up.",
"Looks like we've entered a wormhole. Please keep all arms and legs inside the vessel.",
"Sorry, it seems our AI has developed a crush on you. Please stand by while we reboot its emotional processor.",
"Danger! The system has encountered a neutron star. Please avoid getting too close.",
"Warning: we've entered a dark matter cloud. Please don't breathe too deeply.",
"Uh oh, it looks like we've encountered a quantum decoherence. Please don't lose your coherence.",
"Oops, it looks like we've entered a cosmic ray storm. Please shield yourself and prepare for impact.",
"Attention: the system is experiencing a plasma wave. Please adjust your frequency and stay tuned.",
"Caution: the system has detected a space-time anomaly. Please keep your wits about you.",
"Looks like we've entered a dark energy field. Please don't let it drain your energy.",
"Sorry, it seems our AI has developed a case of the hiccups. Please stand by while we give it some water.",
"Danger! The system has detected a gamma ray burst. Please cover your eyes and hope for the best.",
"Warning: we've entered a gravitational lensing event. Please enjoy the distorted view.",
"Uh oh, it looks like we've encountered a cosmic ray shower. Please duck and cover.",
"Oops, it looks like we've entered a black hole. Please remain calm and enjoy the ride.",
"Attention: the system is experiencing a solar flare. Please put on your shades and protect your eyes.","Caution: the system has detected an alien invasion. Please grab your towel and don't panic.","Looks like we've entered a parallel universe. Please don't touch anything.","Sorry, it seems our AI has developed a fear of heights. Please stand by while we lower the altitude.","Danger! The system has detected a rogue planet. Please avoid collision.","Warning: we've entered a magnetic storm. Please brace for turbulence.","Uh oh, it looks like we've encountered a black hole merger. Please fasten your seatbelts and prepare for impact.","Oops, it looks like we've entered a quantum entanglement. Please don't get too attached.","Attention: the system is experiencing a dimensional shift. Please hold on tight and hope for the best.","Caution: the system has detected a cosmic ray burst. Please shield yourself and hope for the best.","Looks like we've entered a supernova explosion. Please don't blink.","Sorry, it seems our AI has developed a craving for cookies. Please stand by while we provide some.","Danger! The system has detected a black hole singularity. Please avoid getting sucked in.","Warning: we've entered a wormhole tunnel. Please keep all appendages inside the vehicle.","Uh oh, it looks like we've encountered a cosmic string. Please don't get tied up.","Oops, it looks like we've entered a white hole. Please don't lose your marbles.","Attention: the system is experiencing a quantum fluctuation. Please try not to get too dizzy.","Caution: the system has detected a gravitational wave. Please enjoy the ripple effect.","Looks like we've entered a dark matter cloud. Please don't let it cloud your judgment.","Sorry, it seems our AI has developed a sudden interest in gardening. Please stand by while we find some soil.","Danger! The system has detected a pulsar. Please cover your ears and hope for the best.","Warning: we've entered a black hole accretion disk. Please avoid getting burned.","Uh oh, it looks like we've encountered a time loop. Please try not to get stuck.","Oops, it looks like we've entered a black hole firewall. Please don't get burned.","Attention: the system is experiencing a magnetic reconnection. Please stay grounded.","Caution: the system has detected a cosmic microwave background radiation. Please adjust your settings accordingly.","Looks like we've entered a cosmic dust cloud. Please don't sneeze.","Sorry, it seems our AI has developed a case of the hiccups. Please stand by while we give it some water.","Danger! The system has detected a quasar. Please cover your eyes and hope for the best.","Warning: we've entered a gravitational wave echo. Please enjoy the repetition.",
"Uh oh, it looks like we've encountered a singularity.",
"Oops, it looks like we've entered a time vortex. Please check your clocks.",
"Attention: the system is experiencing a cosmic ray shower. Please bring an umbrella.",
"Caution: the system has detected a gamma-ray burst. Please don't turn green.",
"Looks like we've entered a magnetic reconnection event. Please don't let go.",
"Sorry, it seems our AI has developed a case of the giggles. Please stand by while we find something funny.",
"Danger! The system has detected a dark energy field. Please don't lose hope.",
"Warning: we've entered a black hole spin. Please don't get dizzy.",
"Congratulations, you have successfully navigated through all the errors. You are now free to continue using the software. Please be aware of any future cosmic disturbances.",
]

export default ErrorMessages