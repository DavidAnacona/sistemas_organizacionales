import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Stack, Button, TextField, Checkbox, useMediaQuery, Hidden, Paper } from '@mui/material';
import Header from 'shared/components/Header';
import MediaIcons from 'shared/components/MediaIcons';
import Footer from 'shared/components/Footer';
import Lottie from 'react-lottie';
import animationIntroduction from '../public/2022/06/imagen1.jpg';
import animationTechnology from '../public/2022/03/tecnology_use.json';
import animationEcosystem from '../public/2022/03/100788-builds3.json';
import animationEconomics from '../public/2022/03/101035-layer8.json';
import animationConnection from '../public/2022/03/101036-coff3.json';
import animationFuture from '../public/2022/03/lf20_mmci2sy8.json';
import animationTeam from '../public/2022/03/lf20_bsk7hqz4.json';
import animationLnda from '../public/2022/03/100583-coin.json';
import { Content } from '../shared/components/ReadMore';
import { BiShareAlt, BiVector } from 'react-icons/bi';
import { BsFileEarmarkText, BsFillTagFill } from 'react-icons/bs';
import { GiNestedHexagons } from 'react-icons/gi';
import { FaArrowUp, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import Image from 'next/image';
import { useStyles } from '../styles/homepage/styled';
import { useViewportScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Count from 'shared/components/Count';
import SEO from 'shared/components/SEO';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Mapa from "pages/pruebamapa"

const defaultOptionsGlobal = {
	loop: true,
	autoplay: true,
	renderer: 'svg',
};

const Home: NextPage = () => {
	const { t } = useTranslation();
	// ? animation

	const stylesGeneral = useStyles();
	const classes = {
		input: {
			width: '80%',
			paddingBottom: '10px',
			'& .MuiOutlinedInput-root': {
				background: 'grey',
				borderRadius: '10px 0px 10px 0px',
				'&:hover': {
					cursor: 'pointer',
				},
				'& fieldset': {
					borderRadius: '10px 0px 10px 0px',
				},
			},
		},
	};

	const { scrollY } = useViewportScroll();
	const rotate = useTransform(scrollY, [0, 150, 20], [0, 3, 0], { clamp: false });
	const rotate2 = useTransform(scrollY, [0, 300], [0, -5], { clamp: false });

	console.log(scrollY);
	const ContainerSection = ({ step = 1, children }: { step: number; children: React.ReactNode | React.ReactFragment }) => {
		return (
			<Stack sx={stylesGeneral.seccion.container}>
				<motion.div
					className="container"
					style={{
						y: rotate2,
						transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
						transition: 'all ease 1s',
						minHeight: '100vh',
						display: 'flex',
					}}
					transition={{ duration: 1 }}>
					<Stack
						pl={{ xs: 0, md: '60px', xl: 0 }}
						direction={{ xs: 'column', md: 'row-reverse' }}
						justifyContent={{ xs: 'center', md: 'space-between' }}
						width="100%">
						
						{children}
					</Stack>
				</motion.div>
			</Stack>
		);
	};
	const ContainerSectionCus = ({ step = 1, children }: { step: number; children: React.ReactNode | React.ReactFragment }) => {
		return (
			<Stack sx={stylesGeneral.seccion.container}>
				<motion.div
					className="container"
					style={{
						y: rotate2,
						transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
						transition: 'all ease 1s',
						minHeight: '100vh',
						display: 'flex',
					}}
					transition={{ duration: 1 }}>
					<Stack
						pl={{ xs: 0, md: '60px', xl: 0 }}
						direction={{ xs: 'column', md: 'column' }}
						justifyContent={{ xs: 'center', md: 'center' }}
						width="100%">
						
						{children}
					</Stack>
				</motion.div>
			</Stack>
		);
	};

	const WhitePapperBtn = () => (
		<Button
			variant="dashed"
			target="_blank"
			href={`/2022/03/${router.locale === 'en-US' ? 'whitepaper-EN_8-07-2022.pdf' : 'whitepaper-ES_8-07-2022.pdf'}`}>
			Whitepaper
			<HiDownload style={{ paddingLeft: '5px' }} size={17} />
		</Button>
	);
	const router = useRouter();
	return (
		<div>
			<SEO title="Inicio" />
			<Header />
			<Stack sx={{ ...stylesGeneral.seccion.container, position: 'relative' }}>
				<Box
					sx={{
						minHeight: '100vh',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Box
						sx={{
							textAlign: 'center',
							display: 'flex',
							gap: 2,
							justifyContent: 'center',
						}}>
						
						<motion.div
							className="container"
							style={{
								y: rotate,
								transitionTimingFunction: 'cubic-bezier(0,.33,.07,1.03)',
								transition: 'all ease 1s',
							}}
							transition={{ duration: 0.5 }}>
							<Typography
								sx={{
									fontFamily: 'PhatBoy Slim',
									fontWeight: 'bold',
									textTransform: 'uppercase',
									lineHeight: '1.1em',
									letterSpacing: '5px',
								}}
								fontSize={{ xs: '27px', lg: '42px' }}>
								<pre style={{ fontFamily: 'PhatBoy Slim', textAlign: 'center' }}>NUTRILABEL + <br /> Conectando salud y <br/>sabor en cada etiqueta</pre>
							</Typography>
						</motion.div>
						
					</Box>
					<Box position="absolute" left={{ xs: '10%', md: '15%' }} top="15%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/circulo_grande.png" width="80px" />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" left={{ xs: '10%', md: '10%' }} bottom="0">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<Box component="img" src="/2022/03/Grupo-13.png" width={{ xs: '87px', lg: '228px' }} />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" right={{ xs: '10%', md: '15%' }} bottom="15%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/circulo_grande.png" width="100px" />
							</motion.div>
						</AnimatePresence>
					</Box>
					<Box position="absolute" right={{ xs: '10%', md: '15%' }} top="5%">
						<AnimatePresence exitBeforeEnter>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 10, opacity: 1 }}
								exit={{ x: -10, opacity: 0 }}
								transition={{ duration: 1 }}>
								<img src="/2022/03/Grupo-353-1.png" />
							</motion.div>
						</AnimatePresence>
					</Box>
				</Box>
			</Stack>
			{
			//Estrategias
			}
			<ContainerSectionCus step={2}>
				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
						<Typography
								sx={{
									fontFamily: 'PhatBoy Slim',
									fontWeight: 'bold',
									textTransform: 'uppercase',
									lineHeight: '1.1em',
									letterSpacing: '5px',
								}}
								fontSize={{ xs: '27px', lg: '42px' }}>
								<pre style={{ fontFamily: 'PhatBoy Slim', textAlign: 'center' }}>FODA Y ESTRATEGIAS <br />FA, FO, DA Y DO</pre>
						</Typography>
				</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Tecnología Innovadora:</strong> La integración de 
						etiquetas inteligentes utilizando NFC o 
						códigos QR muestra una clara inversión en 
						tecnología avanzada, se puede atraer a un 
						público interesado en la salud y la información nutricional.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Competencia Constante: </strong> El mercado 
						de comestibles es altamente competitivo, y otros 
						competidores pueden copiar la tecnología o estrategias.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Desarrollo Tecnológico Continuo: </strong> 
						Invertir en un equipo de desarrollo tecnológico sólido para mantener y 
						mejorar constantemente las etiquetas inteligentes y la aplicación. 
						Esto ayudará a enfrentar la amenaza de la competencia constante y 
						garantizar un funcionamiento sin problemas.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Recopilación de Datos: </strong> 
						La tecnología NFC y los códigos QR pueden proporcionar datos valiosos sobre las preferencias de compra de los clientes, lo que ayudará a tomar decisiones informadas sobre la gestión de inventario y la personalización de ofertas.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Regulaciones y Cumplimiento: </strong> 
						Se debe estar al tanto de las regulaciones relacionadas con la recopilación de datos y la información nutricional en alimentos.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Mantenimiento de la Privacidad de Datos: </strong> 
						Establecer políticas de privacidad robustas y medidas de seguridad para abordar las preocupaciones de privacidad de los datos y cumplir con las regulaciones. Esto permitirá minimizar el riesgo de sanciones legales y la pérdida de confianza de los clientes.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Innovación: </strong> 
						El concepto único de proporcionar información nutricional detallada en tiempo real a través de etiquetas inteligentes y recetas personalizadas puede destacar en el mercado de comestibles.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Cambios en las Tendencias de Salud: </strong> 
						Las tendencias de salud pueden cambiar rápidamente, por lo que se debe estar preparado para adaptarse a las preferencias cambiantes de los consumidores. 
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Adaptabilidad Nutricional Tecnológica: </strong> 
						Para mantener la relevancia ante tendencias de salud cambiantes, las etiquetas inteligentes permiten adaptaciones rápidas, como destacar productos sin gluten ante demandas crecientes. Al responder velozmente a nuevos enfoques nutricionales, los consumidores ven la tienda como fuente confiable en salud y nutrición. La adaptabilidad tecnológica combate los cambios en preferencias de salud.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Enfoque en la Salud: </strong> 
						En un mundo cada vez más consciente de la salud, el enfoque en proporcionar consejos de salud puede resonar con consumidores preocupados por su bienestar.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Rechazo Tecnológico: </strong> 
						A pesar del auge tecnológico, algunos consumidores, por desconfianza o preferencia, evitan nuevos métodos de compra, limitando la penetración de mercado de la tienda.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Clínicas Tecnológicas de Bienestar: </strong>
						La tienda ofrece talleres para enseñar sobre nutrición, uso de etiquetas NFC y la app, fortaleciendo su imagen como líder en bienestar e innovación. Estas clínicas reducen barreras tecnológicas y refuerzan el compromiso con la salud, contrarrestando el rechazo tecnológico. 
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Potencial para Fidelización: </strong> 
						La aplicación móvil para recetas basadas en las etiquetas inteligentes puede fomentar la lealtad de los clientes y aumentar las ventas recurrentes
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Dependencia Tecnológica: </strong> 
						Fallos en etiquetas NFC o la app pueden dañar la reputación de la tienda, y ciberataques comprometen la seguridad del cliente.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Plan de Recompensas de Respaldo: </strong>
						Ante fallos técnicos, se activaría un "Plan de Recompensas de Respaldo" ofreciendo bonificaciones a los usuarios. La app incluiría una sección para reportar problemas, recompensando las notificaciones. Esta estrategia anticipa problemas tecnológicos y utiliza incentivos para fortalecer la lealtad y minimizar impactos negativos.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Enfoque en la Salud: </strong> 
						En un mundo cada vez más consciente de la salud, el enfoque en proporcionar consejos de salud puede resonar con consumidores preocupados por su bienestar.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Segmentación de Mercado: </strong> 
						Identificamos segmentos de mercado específicos interesados en la información nutricional detallada y los consejos de salud. 
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Marketing Especializado: </strong>
						Utilizar tu enfoque en la salud y la información nutricional para dirigirse a segmentos de mercado específicos interesados en estos aspectos. Se puede crear campañas de marketing dirigidas a personas preocupadas por su bienestar y que buscan información detallada sobre los alimentos que consumen.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Tecnología Innovadora: </strong> 
						La integración de etiquetas inteligentes utilizando NFC o códigos QR muestra una clara inversión en tecnología avanzada, se puede atraer a un público interesado en la salud y la información nutricional.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Expansión de Servicios: </strong> 
						Se podría expandir los servicios para incluir opciones de entrega a domicilio o recogida en la tienda basadas en las preferencias del cliente.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Expansión de Servicios: </strong>
						Aprovechar la oportunidad de ofrecer opciones de entrega a domicilio o recogida en la tienda, especialmente para aquellos clientes que buscan conveniencia y una experiencia personalizada.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Innovación: </strong> 
						El concepto único de proporcionar información nutricional detallada en tiempo real a través de etiquetas inteligentes y recetas personalizadas puede destacar en el mercado de comestibles.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Colaboraciones Estratégicas: </strong> 
						Considerar asociarnos con fabricantes de alimentos saludables o nutricionistas para ofrecer contenido y recomendaciones adicionales. 
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Alianzas Estratégicas: </strong>
						Colaborar con fabricantes de alimentos saludables y nutricionistas para ofrecer contenido adicional y recomendaciones. Esto puede fortalecer tu posición como fuente confiable de información nutricional y consejos de salud.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>FORTALEZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Potencial para Fidelización: </strong> 
						La aplicación móvil para recetas basadas en las etiquetas inteligentes puede fomentar la lealtad de los clientes y aumentar las ventas recurrentes.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Programas de Recompensas y Gamificación: </strong> 
						Usando NFC y códigos QR, se lanza un programa de lealtad gamificado. Los clientes ganan puntos al explorar productos y recetas, canjeables por descuentos o eventos exclusivos.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA FO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Programa "Descubre y Cocina": </strong>
						Implementamos un programa de lealtad gamificado "Descubre y Cocina". Los clientes ganan puntos al escanear productos, obtener recetas y descubrir detalles nutricionales. Al acumular puntos, se canjean por descuentos o acceso a eventos exclusivos. Desafíos mensuales incentivan compartir recetas en redes sociales, otorgando puntos extra.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>DEBILIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Educación del Consumidor: </strong> 
						Los compradores pueden no estar familiarizados con la tecnología NFC o los códigos QR en el contexto de compras de comestibles, lo que requerirá una campaña de marketing educativo.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "280px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Rechazo Tecnológico: </strong> 
						A pesar de la tendencia creciente hacia la adopción de tecnología, existe una parte de la población que puede ser reacia a adoptar estos nuevos métodos de compra. Ya sea por desconocimiento, desconfianza o simplemente por preferir métodos tradicionales, esto podría limitar la penetración de mercado de la tienda.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA DA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Educación del Consumidor:  </strong>
						Lanzar una campaña de marketing educativo para abordar la falta de familiaridad de los consumidores con la tecnología NFC y los códigos QR. Esto ayudará a superar la debilidad de la educación del consumidor y a mitigar el riesgo de que los compradores no adopten la tecnología.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>DEBILIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Privacidad de los Datos: </strong> 
						Se debe abordar adecuadamente las preocupaciones de privacidad de los datos, ya que recopila información personal de los usuarios a través de la aplicación.
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>AMENAZA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Dependencia Tecnológica: </strong> 
						Fallos en etiquetas NFC o la app pueden dañar la reputación de la tienda, y ciberataques comprometen la seguridad del cliente.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA DA</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Fortalecimiento de la Infraestructura de Seguridad Digital:  </strong>
						Implementar una infraestructura de seguridad digital robusta para proteger los datos personales de los usuarios y garantizar su privacidad. Esto incluiría la adopción de protocolos de encriptación avanzados, la contratación de expertos en ciberseguridad, la realización de auditorías de seguridad regulares y la formación de todo el personal sobre las mejores prácticas de seguridad. Además, sería fundamental comunicar activamente a los clientes las medidas de seguridad adoptadas para proteger sus datos, para generar confianza y alentar su uso continuo de la aplicación.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>DEBILIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Costos Iniciales: </strong> 
						La implementación de etiquetas inteligentes y una aplicación móvil sofisticada requerirá una inversión significativa en tecnología y desarrollo de software. 
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Expansión de Servicios: </strong> 
						Se podría expandir los servicios para incluir opciones de entrega a domicilio o recogida en la tienda basadas en las preferencias del cliente.
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA DO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Gestión de Costos Iniciales: </strong>
						Buscar formas de reducir los costos iniciales mediante la identificación de eficiencias en la implementación de etiquetas inteligentes y desarrollo de la aplicación. Esto permitirá aprovechar la oportunidad de expansión de servicios y colaboraciones estratégicas sin comprometer las finanzas.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			<ContainerSectionCus step={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "480px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>DEBILIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Competencia: </strong> 
						Puede haber competidores establecidos en el mercado de comestibles que ofrezcan servicios similares o que estén dispuestos a adoptar tecnologías similares. 
						</Typography>
					</Box>
					<Box sx={{ width: "450px", height: "220px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>OPORTUNIDAD</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Segmentación de Mercado:  </strong> 
						Identificamos segmentos de mercado específicos interesados en la información nutricional detallada y los consejos de salud. 
						</Typography>
					</Box>
    			</Box>
				<Box sx={{width:"600px", height: "30px", alignSelf: "center", borderBottom: "1px solid #BDBDBD", borderLeft: "1px solid #BDBDBD", borderRight: "1px solid #BDBDBD", borderRadius: "2px"}}></Box>
				<Box sx={{ width:"0.5px", height: "30px", alignSelf: "center", borderLeft: "1px solid #BDBDBD"}}></Box>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-around" }}>
					<Box sx={{ width: "550px", height: "250px"}}>
						<Typography paragraph sx={{ textAlign:"center", fontWeight: '500', fontSize: '24px', fontFamily: 'Oswald', lineHeight: 1.5 }}><strong>ESTRATEGIA DO</strong></Typography>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "center"}}>
						<strong>Evolución con las Tendencias: </strong>
						Mantener un estado flexible y adaptable para ajustarse rápidamente a los cambios en las tendencias de salud y las preferencias de los consumidores. Esto permitirá aprovechar las oportunidades emergentes y minimizar el impacto de las amenazas relacionadas con cambios en las tendencias.
						</Typography>
					</Box>
    			</Box>
			</ContainerSectionCus>
			{
				//Introduction
			}
			<ContainerSection step={2}>
				<Box></Box>
				<Box></Box>
				<Hidden mdDown>
					<Box sx={{width: "350px", height: "350px", alignSelf: "center", borderRadius: "50%", overflow: "hidden"}}>
						<Image src="/2022/06/imagen1.jpg" layout="responsive" width={20} height={20} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography sx={stylesGeneral.seccion.titleSeccion}>Quienes somos</Typography>
					
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5 }}>
						Somos una empresa dedicada a mejorar la experiencia de <br /> compra 
						de alimentos al proporcionar a nuestros clientes <br /> información 
						nutricional detallada y consejos de salud en <br />tiempo real a través 
						de etiquetas inteligentes y una  <br />aplicación móvil innovadora.
						Nos esforzamos por ayudar  <br />a las personas a tomar decisiones
						alimenticias más  <br />informadas y saludables.
						</Typography>
						
					</Box>
				</Box>
				<Box></Box>
			</ContainerSection>
			<ContainerSection step={2}>
				<Box></Box>
				<Box></Box>
				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography sx={stylesGeneral.seccion.titleSeccion2}>Misión</Typography>
					
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5, textAlign: "right"}}>
						Nuestra misión es transformar la forma en que las personas  <br /> 
						compran alimentos al ofrecer acceso a información nutricional  <br /> 
						precisa y consejos de salud en el momento de la compra.  <br /> 
						Buscamos empoderar a nuestros clientes para que tomen  <br /> 
						decisiones alimenticias más conscientes y mejoren su bienestar.
						</Typography>
						
					</Box>
				</Box>
				<Hidden mdDown>
					<Box sx={{width: "350px", height: "350px", alignSelf: "center", borderRadius: "50%", overflow: "hidden"}}>
						<Image src="/2022/06/imagen2.jpg" layout="responsive" width={20} height={20} />
					</Box>
				</Hidden>
				<Box></Box>
			</ContainerSection>
			<ContainerSection step={2}>
				<Box></Box>
				<Box></Box>
				<Hidden mdDown>
					<Box sx={{width: "350px", height: "350px", alignSelf: "center", borderRadius: "50%", overflow: "hidden"}}>
						<Image src="/2022/06/imagen3.jpg" layout="responsive" width={20} height={20} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography sx={stylesGeneral.seccion.titleSeccion}>Visión</Typography>
					
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: '500', fontSize: '21px', fontFamily: 'Oswald', lineHeight: 1.5 }}>
						Nuestra visión es convertirnos en el líder reconocido en <br />
						la industria de comestibles, brindando a los consumidores <br />
						la mejor experiencia de compra posible mediante la innovación <br />
						tecnológica y la promoción de un estilo de vida saludable. <br />
						Queremos ser la primera opción de los consumidores cuando <br />
						busquen información nutricional y consejos de salud mientras <br />
						compran alimentos, De igual forma realizar un crecimiento<br />
						 a nivel nacional llegando a todos los rincones del país.
						</Typography>
						
					</Box>
				</Box>
				<Box></Box>
			</ContainerSection>
			{/*
			{
				//Technology
			}
			<ContainerSection step={3}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationTechnology} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Technology.title')}
					</Typography>
					<Content seccion="Technology" numberWords={460}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Technology.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Technology.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Technology.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Technology.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<WhitePapperBtn />
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationTechnology} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.2')}
					</Typography>
				</Box>
			</ContainerSection>

			{
				//Ecosystem
			}
			<ContainerSection step={4}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Ecosystem.title')}
					</Typography>
					<Content seccion="Ecosystem" numberWords={505}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Ecosystem.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Ecosystem.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<WhitePapperBtn />
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEcosystem} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.3')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Economics
			}
			<ContainerSection step={5}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEconomics} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Economics.title')}
					</Typography>
					<Stack sx={{ opacity: '0.7' }}>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<GiNestedHexagons size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.0')}
							</Typography>
							<BsFileEarmarkText size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.1')}
							</Typography>
						</Stack>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<BiVector size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.2')}
							</Typography>
							<FaArrowUp size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.3')}
							</Typography>
						</Stack>
						<Stack sx={stylesGeneral.seccion.containerEconomicsTags}>
							<BsFillTagFill size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsFirst}>
								{t('homepage.Economics.tags.4')}
							</Typography>
							<BiShareAlt size={20} />
							<Typography paragraph sx={stylesGeneral.seccion.economicsTagsSecond}>
								{t('homepage.Economics.tags.5')}
							</Typography>
						</Stack>
					</Stack>
					<Content seccion="Economics" numberWords={332}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<WhitePapperBtn />
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationEconomics} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.4')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Connection
			}
			<ContainerSection step={6}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationConnection} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Connection.title')}
					</Typography>
					<Content seccion="Connection" numberWords={300}></Content>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Connection.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.Connection.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.Connection.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.Connection.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<WhitePapperBtn />
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationConnection} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.5')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//The future
			}
			<ContainerSection step={7}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationFuture} />
					</Box>
				</Hidden>
				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.TheFuture.title')}
					</Typography>
					<Box sx={{ fontSize: { xs: '10.5px', md: '13px', lg: '15px' } }}>
						<pre style={{ textAlign: small ? 'center' : 'left' }}>{t('homepage.TheFuture.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph sx={{ fontWeight: 'bold' }}>
							{t('homepage.seccionLink')}
						</Typography>
						<Box sx={stylesGeneral.seccion.containerRelatedLink}>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.TheFuture.relatedLink.0')}
							</Typography>
							<Typography sx={stylesGeneral.seccion.secondRelatedLink}>{t('homepage.TheFuture.relatedLink.1')}</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.firstRelatedLink}>
								{t('homepage.TheFuture.relatedLink.2')}
							</Typography>
						</Box>
						<Box>
							<Typography paragraph sx={stylesGeneral.seccion.secondRelatedLink}>
								{t('homepage.TheFuture.relatedLink.3')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.information')}
							</Typography>
							<Box>
								<WhitePapperBtn />
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationFuture} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.6')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//Team
			}
			<ContainerSection step={8}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimationTeam}>
						<Lottie options={AnimationTeam} />
					</Box>
				</Hidden>
				<Box
					textAlign={{ xs: 'center', md: 'left', lg: 'left' }}
					px={4}
					top={0}
					sx={{
						alignSelf: 'center',
						flexWrap: 'wrap',
						display: 'flex',
						justifyContent: { xs: 'center', md: 'left', lg: 'left' },
					}}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Team.title')}
					</Typography>
					<Stack sx={stylesGeneral.seccion.containerMembers}>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image src="/2022/03/Austin.jpg" layout="responsive" width={20} height={20} />
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								{t('homepage.Team.members.0')}
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Miguel.jpg"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Miguel
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Omarcc4.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Omar
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Daniel.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Daniel
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Elias.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Elias
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Rebeca.jpg"
									layout="responsive"
									width={medium ? 110 : small ? 90 : 130}
									height={medium ? 110 : small ? 90 : 130}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Rebeca
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Juan.jpg"
									layout="responsive"
									width={medium ? 100 : small ? 90 : 100}
									height={medium ? 100 : small ? 90 : 100}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Juan
							</Typography>
						</Box>
						<Box sx={stylesGeneral.seccion.containerTeam}>
							<Box sx={stylesGeneral.seccion.containerImage}>
								<Image
									src="/2022/03/Stefania.jpg"
									layout="responsive"
									width={medium ? 100 : small ? 90 : 100}
									height={medium ? 100 : small ? 90 : 100}
								/>
							</Box>
							<Typography paragraph sx={stylesGeneral.seccion.memberName}>
								Stefania
							</Typography>
						</Box>
					</Stack>
					<Box sx={{ marginTop: '25px' }}>
						<Box sx={stylesGeneral.seccion.containerInformation}>
							<Typography paragraph sx={stylesGeneral.seccion.information}>
								{t('homepage.Team.know')}
							</Typography>
							<Box>
								<Button
									variant="dashed"
									target="_blank"
									href={`/2022/03/${
										router.locale === 'en-US' ? 'whitepaper-EN_8-07-2022.pdf#page=35' : 'whitepaper-ES_8-07-2022.pdf#page=35'
									}`}>
									{t('homepage.Team.rest')}
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimationTeam}>
						<Lottie options={AnimationTeam} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.7')}
					</Typography>
				</Box>
			</ContainerSection>
			{
				//LNDA
			}
			<ContainerSection step={9}>
				<Hidden mdDown>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationLnda} />
					</Box>
				</Hidden>

				<Box textAlign={{ xs: 'center', md: 'left' }} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography variant="h3" sx={stylesGeneral.seccion.titleSeccion}>
						{t('homepage.Experience.title')}
					</Typography>
					<Box sx={{ fontSize: { xs: '10px', md: '13px', lg: '15px' } }}>
						<pre style={{ textAlign: small ? 'center' : 'left' }}>{t('homepage.Experience.description')}</pre>
					</Box>
					<Box sx={{ marginTop: '25px' }}>
						<Typography paragraph fontSize={dwarf ? '8px' : ''} sx={{ fontWeight: 'bold' }}>
							{t('homepage.Experience.contract')}
						</Typography>
					</Box>

					<Box sx={stylesGeneral.seccion.containerInformation}>
						<Stack direction={{ xs: 'row', lg: 'row' }} alignItems="center" justifyContent="center" height="100%" gap="5px">
							<Button variant="dashed" onClick={() => router.push('/LNDA')}>
								{t('homepage.shortInformation')}
							</Button>
							<a
								href={`/2022/03/${router.locale === 'en-US' ? 'whitepaper-EN_8-07-2022.pdf' : 'whitepaper-ES_8-07-2022.pdf'}`}
								target="_blank"
								rel="noopener noreferrer">
								<Paper sx={stylesGeneral.seccion.blackpaper}>swap LNDA</Paper>
							</a>
						</Stack>
					</Box>
				</Box>
				<Hidden mdUp>
					<Box sx={dwarf ? stylesGeneral.seccion.dwarf : stylesGeneral.seccion.containerAnimation}>
						<Lottie options={AnimationLnda} />
					</Box>
				</Hidden>
				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.8')}
					</Typography>
				</Box>
			</ContainerSection>

			{
				//Suscribe
			}
			<ContainerSection step={10}>
				<Box textAlign={'center'} px={4} top={0} sx={{ alignSelf: 'center' }}>
					<Typography fontSize={{ xs: '27px', md: '42px' }} fontWeight="500">
						{t('homepage.Suscribe.title')}
					</Typography>
					<Box>
						<Button variant="dashed" href="https://twitter.com/landianmeta" target="_blank">
							<FaTwitter size={20} />
							<Typography fontSize={20} sx={{ marginLeft: '10px' }}>
								Twitter
							</Typography>
						</Button>
					</Box>
				</Box>

				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.9')}
					</Typography>
				</Box>
			</ContainerSection>
			<ContainerSection step={11}>
				<Box textAlign={'center'} px={4} top={0} sx={{ alignSelf: 'center', width: '100%' }}>
					<Typography fontSize={{ xs: '27px', md: '42px' }} fontWeight="500">
						{t('homepage.Count.title')}
					</Typography>
					<Box>
						<Count />
					</Box>
				</Box>

				<Box sx={stylesGeneral.seccion.nameSeccion}>
					<Typography paragraph sx={stylesGeneral.seccion.textNameSeccion}>
						{t('homepage.seccion.10')}
					</Typography>
				</Box>
			</ContainerSection>
			<Footer />
		*/}
		</div>
	);
};

export default Home;
