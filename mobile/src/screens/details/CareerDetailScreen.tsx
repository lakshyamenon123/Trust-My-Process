import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ArrowRight, Briefcase } from 'lucide-react-native'
import Card from '../../components/Card'
import DetailHeader from '../../components/DetailHeader'
import ProgressRing from '../../components/ProgressRing'
import { skills, findById } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'
import { careers } from '../../data/studentData'

type Props = NativeStackScreenProps<RootStackParamList, 'CareerDetail'>

export default function CareerDetailScreen({ route, navigation }: Props) {
  const career = findById(careers, route.params.id)
  if (!career) return null

  const relatedSkills = career.relatedSkills.map((id) => findById(skills, id)).filter(Boolean)

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card style={styles.headerCard}>
        <DetailHeader icon={career.icon} title={career.title} subtitle={career.salaryRange} color={colors.primaryDeep} />
        <ProgressRing value={career.matchPct} size={64} color={colors.accent} />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{career.description}</Text>
      </Card>

      <Card>
        <View style={styles.sectionHeaderRow}>
          <Briefcase size={16} color={colors.primary} />
          <Text style={styles.sectionTitle}>A day in the life</Text>
        </View>
        <View style={styles.list}>
          {career.dayInLife.map((item) => (
            <View key={item} style={styles.bulletRow}>
              <View style={styles.bullet} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Suggested path</Text>
        <View style={styles.list}>
          {career.suggestedPath.map((item, index) => (
            <View key={item} style={styles.pathRow}>
              <View style={styles.pathIndex}>
                <Text style={styles.pathIndexText}>{index + 1}</Text>
              </View>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>

      {relatedSkills.length > 0 && (
        <Card>
          <Text style={styles.sectionTitle}>Related skills</Text>
          <View style={styles.list}>
            {relatedSkills.map((skill) => (
              <Pressable
                key={skill!.id}
                style={styles.skillRow}
                onPress={() => navigation.navigate('SkillDetail', { id: skill!.id })}
              >
                <Text style={styles.skillTitle}>{skill!.name}</Text>
                <ArrowRight size={16} color={colors.muted} />
              </Pressable>
            ))}
          </View>
        </Card>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  headerCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitle: { fontFamily: fonts.displaySemibold, fontSize: 14, color: colors.ink },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  paragraph: { fontFamily: fonts.body, fontSize: 13.5, color: colors.muted, lineHeight: 20 },
  list: { gap: 10, marginTop: 10 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  bullet: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary, marginTop: 6 },
  listText: { flex: 1, fontFamily: fonts.body, fontSize: 13.5, color: colors.ink, lineHeight: 19 },
  pathRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  pathIndex: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pathIndexText: { fontFamily: fonts.bodySemibold, fontSize: 11, color: colors.white },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  skillTitle: { fontFamily: fonts.bodyMedium, fontSize: 13.5, color: colors.ink },
})
