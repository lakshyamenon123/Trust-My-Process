import { ScrollView, Text, View, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { CheckCircle2 } from 'lucide-react-native'
import Card from '../../components/Card'
import DetailHeader from '../../components/DetailHeader'
import LevelBar from '../../components/LevelBar'
import { skills, findById } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList } from '../../navigation/types'

type Props = NativeStackScreenProps<RootStackParamList, 'SkillDetail'>

export default function SkillDetailScreen({ route }: Props) {
  const skill = findById(skills, route.params.id)
  if (!skill) return null

  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card>
        <DetailHeader icon={skill.icon} title={skill.name} subtitle={skill.category} color={colors.highlight} />
        <LevelBar label="Skill level" value={skill.level} color={colors.highlight} />
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{skill.description}</Text>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Evidence</Text>
        <View style={styles.list}>
          {skill.evidence.map((item) => (
            <View key={item} style={styles.listRow}>
              <CheckCircle2 size={16} color={colors.accent} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Card>
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
})
