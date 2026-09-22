import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native'
import { ChevronRight, Compass, Sparkles, Zap, Briefcase } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import Card from '../../components/Card'
import { interests, strengths, skills, careers } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList, StudentTabParamList } from '../../navigation/types'

type Props = CompositeScreenProps<
  BottomTabScreenProps<StudentTabParamList, 'Explore'>,
  NativeStackScreenProps<RootStackParamList>
>

const SECTIONS = [
  { key: 'InterestsList' as const, title: 'Interests', icon: Sparkles, color: colors.primary, count: interests.length, blurb: 'What Alex gravitates toward' },
  { key: 'StrengthsList' as const, title: 'Strengths', icon: Zap, color: colors.accent, count: strengths.length, blurb: 'Academic subjects Alex excels in' },
  { key: 'SkillsList' as const, title: 'Skills', icon: Compass, color: colors.highlight, count: skills.length, blurb: 'Talents built through practice' },
  { key: 'CareersList' as const, title: 'Careers', icon: Briefcase, color: colors.primaryDeep, count: careers.length, blurb: 'Paths that match Alex today' },
]

export default function ExploreScreen({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      {SECTIONS.map((section) => (
        <Pressable key={section.key} onPress={() => navigation.navigate(section.key)}>
          <Card style={styles.row}>
            <View style={[styles.iconWrap, { backgroundColor: `${section.color}1a` }]}>
              <section.icon size={22} color={section.color} />
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>{section.title}</Text>
              <Text style={styles.blurb}>{section.blurb}</Text>
            </View>
            <Text style={styles.count}>{section.count}</Text>
            <ChevronRight size={20} color={colors.muted} />
          </Card>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  iconWrap: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  body: { flex: 1, gap: 3 },
  title: { fontFamily: fonts.displaySemibold, fontSize: 15, color: colors.ink },
  blurb: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted },
  count: { fontFamily: fonts.bodySemibold, fontSize: 14, color: colors.muted, marginRight: 2 },
})
