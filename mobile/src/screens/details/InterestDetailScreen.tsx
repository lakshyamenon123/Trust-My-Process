import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CheckCircle2, ChevronRight } from 'lucide-react-native'
import Card from '../../components/Card'
import DetailHeader from '../../components/DetailHeader'
import LevelBar from '../../components/LevelBar'
import IconBadge from '../../components/IconBadge'
import { interests, careers, findById } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'InterestDetail'>

export default function InterestDetailScreen({ route, navigation }: Props) {
  const interest = findById(interests, route.params.id)
  if (!interest) return null

  const relatedCareers = interest.relatedCareers.map((id) => findById(careers, id)).filter(Boolean)

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card>
        <DetailHeader icon={interest.icon} title={interest.title} subtitle={interest.summary} />
        <LevelBar label="Engagement level" value={interest.level} />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{interest.description}</Text>
      </Card>

      {interest.evidence.length > 0 && (
        <Card>
          <Text style={styles.sectionTitle}>Evidence</Text>
          <View style={styles.list}>
            {interest.evidence.map((item) => (
              <View key={item} style={styles.listRow}>
                <CheckCircle2 size={16} color={colors.accent} />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>
        </Card>
      )}

      {interest.projects.length > 0 && (
        <Card>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.list}>
            {interest.projects.map((project) => (
              <View key={project.title} style={styles.projectRow}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectNote}>{project.note}</Text>
              </View>
            ))}
          </View>
        </Card>
      )}

      {relatedCareers.length > 0 && (
        <Card>
          <Text style={styles.sectionTitle}>Related careers</Text>
          <View style={styles.list}>
            {relatedCareers.map((career) => (
              <Pressable
                key={career!.id}
                style={styles.careerRow}
                onPress={() => navigation.navigate('CareerDetail', { id: career!.id })}
              >
                <IconBadge icon={career!.icon} size={36} color={colors.primaryDeep} />
                <Text style={styles.careerTitle}>{career!.title}</Text>
                <ChevronRight size={18} color={colors.muted} />
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
  sectionTitle: { fontFamily: fonts.displaySemibold, fontSize: 14, color: colors.ink, marginBottom: 10 },
  paragraph: { fontFamily: fonts.body, fontSize: 13.5, color: colors.muted, lineHeight: 20 },
  list: { gap: 10 },
  listRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  listText: { flex: 1, fontFamily: fonts.body, fontSize: 13.5, color: colors.ink, lineHeight: 19 },
  projectRow: { gap: 2 },
  projectTitle: { fontFamily: fonts.bodySemibold, fontSize: 13.5, color: colors.ink },
  projectNote: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted, lineHeight: 17 },
  careerRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  careerTitle: { flex: 1, fontFamily: fonts.bodyMedium, fontSize: 13.5, color: colors.ink },
})
