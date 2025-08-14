// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ImageBackground
// } from 'react-native';

// const mockProviders = [
//   {
//     id: '1',
//     name: 'Happy Paws Boarding',
//     location: 'Delhi',
//     type: 'boarding_house',
//     rating: 4.9,
//     pricePerDay: 500
//   },
//   {
//     id: '2',
//     name: 'SafePet Sitters',
//     location: 'Noida',
//     type: 'sitter',
//     rating: 4.6,
//     pricePerDay: 400
//   },
//   {
//     id: '3',
//     name: 'CareVet Clinic',
//     location: 'Gurgaon',
//     type: 'clinic',
//     rating: 4.7,
//     pricePerDay: 600
//   },
// ];

// const serviceTypes = [
//   { id: 'all', name: 'All Services', icon: '🏠', color: '#96CEB4' },
//   { id: 'sitter', name: 'Pet Sitters', icon: '👥', color: '#FFEAA7' },
//   { id: 'boarding_house', name: 'Boarding Houses', icon: '🏨', color: '#74B9FF' },
//   { id: 'clinic', name: 'Vet Clinics', icon: '🏥', color: '#FD79A8' },
// ];

// export default function BoardingScreen() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedType, setSelectedType] = useState('all');
//   const [sortBy, setSortBy] = useState('rating');

//   const filteredProviders = mockProviders
//     .filter(provider => {
//       const matchesSearch =
//         provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         provider.location.toLowerCase().includes(searchQuery.toLowerCase());
//       if (selectedType === 'all') return matchesSearch;
//       return matchesSearch && provider.type === selectedType;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price':
//           return a.pricePerDay - b.pricePerDay;
//         case 'rating':
//           return b.rating - a.rating;
//         default:
//           return 0;
//       }
//     });

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={{ uri: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg' }}
//         style={styles.headerBackground}
//         imageStyle={styles.headerBackgroundImage}
//       >
//         <View style={styles.headerOverlay}>
//           <Text style={styles.title}>Pet Boarding & Care 🏠</Text>
//           <Text style={styles.subtitle}>Trusted care when you're away</Text>

//           <TextInput
//             placeholder="Search by name or location..."
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//             style={styles.searchInput}
//           />
//         </View>
//       </ImageBackground>

//       <View style={styles.typesSection}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typesScroll}>
//           {serviceTypes.map((type) => (
//             <TouchableOpacity
//               key={type.id}
//               style={[
//                 styles.typeButton,
//                 selectedType === type.id && { backgroundColor: type.color }
//               ]}
//               onPress={() => setSelectedType(type.id)}
//             >
//               <Text style={styles.typeIcon}>{type.icon}</Text>
//               <Text style={[
//                 styles.typeText,
//                 selectedType === type.id && styles.typeTextActive
//               ]}>
//                 {type.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <View style={styles.filtersRow}>
//           <TouchableOpacity style={styles.sortButton} onPress={() => setSortBy('rating')}>
//             <View style={styles.placeholderIcon} />
//             <Text style={styles.sortButtonText}>Sort by Rating</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.mapButton}>
//             <View style={styles.placeholderIcon} />
//             <Text style={styles.mapButtonText}>Map View</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         <View style={styles.featuresSection}>
//           <Text style={styles.featuresTitle}>🌟 Why Choose Our Partners?</Text>
//           <View style={styles.featuresGrid}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIconContainer}>
//                 <View style={styles.placeholderIcon} />
//               </View>
//               <Text style={styles.featureText}>Verified & Insured</Text>
//               <Text style={styles.featureSubtext}>100% trusted</Text>
//             </View>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIconContainer}>
//                 <View style={styles.placeholderIcon} />
//               </View>
//               <Text style={styles.featureText}>Top Rated</Text>
//               <Text style={styles.featureSubtext}>4.8+ rating</Text>
//             </View>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIconContainer}>
//                 <View style={styles.placeholderIcon} />
//               </View>
//               <Text style={styles.featureText}>Expert Care</Text>
//               <Text style={styles.featureSubtext}>Trained staff</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.sectionHeader}>
//           <View style={styles.sectionTitleContainer}>
//             <Text style={styles.sectionTitle}>🏡 Available Providers</Text>
//             <Text style={styles.sectionSubtitle}>Caring homes for your pets</Text>
//           </View>
//           <View style={styles.providerCountContainer}>
//             <Text style={styles.providerCount}>{filteredProviders.length}</Text>
//             <Text style={styles.providerCountLabel}>providers</Text>
//           </View>
//         </View>

//         {filteredProviders.map((provider) => (
//           <View key={provider.id} style={styles.providerCard}>
//             <Text style={styles.providerName}>{provider.name}</Text>
//             <Text style={styles.providerDetail}>📍 {provider.location}</Text>
//             <Text style={styles.providerDetail}>⭐ {provider.rating} | ₹{provider.pricePerDay}/day</Text>
//           </View>
//         ))}

//         <View style={styles.bottomSpacing} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F8F9FA' },
//   headerBackground: { paddingTop: 50, paddingBottom: 20 },
//   headerBackgroundImage: { opacity: 0.15 },
//   headerOverlay: {
//     backgroundColor: 'rgba(150, 206, 180, 0.95)',
//     paddingHorizontal: 16,
//     paddingVertical: 24,
//     borderBottomLeftRadius: 25,
//     borderBottomRightRadius: 25,
//   },
//   title: { fontSize: 24, fontWeight: '700', color: '#FFFFFF', marginBottom: 6 },
//   subtitle: { fontSize: 14, fontWeight: '400', color: '#FFFFFF', opacity: 0.9, marginBottom: 16 },
//   searchInput: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     fontSize: 14,
//   },
//   typesSection: { backgroundColor: '#FFFFFF', paddingVertical: 16 },
//   typesScroll: { paddingHorizontal: 16, marginBottom: 16 },
//   typeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 25,
//     backgroundColor: '#F1F3F4',
//     marginRight: 12,
//     elevation: 3,
//   },
//   typeIcon: { fontSize: 18, marginRight: 8 },
//   typeText: { fontSize: 13, fontWeight: '600', color: '#6B7280' },
//   typeTextActive: { color: '#FFFFFF' },
//   filtersRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 },
//   sortButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#F1F3F4',
//     borderRadius: 20,
//   },
//   sortButtonText: { fontSize: 12, fontWeight: '600', color: '#6B7280', marginLeft: 6 },
//   mapButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#E3F2FD',
//     borderRadius: 20,
//   },
//   mapButtonText: { fontSize: 12, fontWeight: '600', color: '#74B9FF', marginLeft: 6 },
//   placeholderIcon: {
//     width: 14,
//     height: 14,
//     marginRight: 6,
//   },
//   content: { flex: 1 },
//   featuresSection: {
//     backgroundColor: '#FFFFFF',
//     margin: 16,
//     borderRadius: 16,
//     padding: 20,
//     elevation: 4,
//   },
//   featuresTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   featuresGrid: { flexDirection: 'row', justifyContent: 'space-around' },
//   featureItem: { alignItems: 'center', flex: 1 },
//   featureIconContainer: {
//     backgroundColor: '#F7FAFC',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   featureText: { fontSize: 13, fontWeight: '700', color: '#2D3748', textAlign: 'center', marginBottom: 2 },
//   featureSubtext: { fontSize: 11, fontWeight: '400', color: '#718096', textAlign: 'center' },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//   },
//   sectionTitleContainer: { flex: 1 },
//   sectionTitle: { fontSize: 20, fontWeight: '700', color: '#2D3748' },
//   sectionSubtitle: { fontSize: 13, fontWeight: '400', color: '#718096', marginTop: 2 },
//   providerCountContainer: { alignItems: 'center' },
//   providerCount: { fontSize: 24, fontWeight: '700', color: '#96CEB4' },
//   providerCountLabel: { fontSize: 12, fontWeight: '500', color: '#718096' },
//   providerCard: {
//     backgroundColor: '#FFFFFF',
//     marginHorizontal: 16,
//     marginBottom: 12,
//     padding: 16,
//     borderRadius: 12,
//     elevation: 2,
//   },
//   providerName: { fontSize: 16, fontWeight: '700', color: '#2D3748' },
//   providerDetail: { fontSize: 13, color: '#6B7280', marginTop: 4 },
//   bottomSpacing: { height: 20 },
// });